'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useHeader } from '@/context/header-context';
import { convertToKorLabel } from '@/utils/my-page';
import { InvestType } from '@prisma/client';
import { shortVideos, VideoItem } from '../../../data/video-data';

const ShortsScrollViewer = () => {
  const { setHeader } = useHeader();
  const [filteredVideo, setFilteredVideo] = useState<VideoItem[]>([]);
  const params = useParams();

  const searchParams = useSearchParams();
  const raw = params['category'];
  const category = Array.isArray(raw) ? (raw[0] as string) : (raw as string);
  const investType = searchParams.get('investType') ?? undefined;
  const initialIndex = Number(searchParams.get('selectedIdx') ?? 0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let filtered: VideoItem[] = [];

    if (category === 'hana') {
      filtered = shortVideos.filter((v) => v.category === 'hana');
      setHeader('숏츠 가이드', '투자 꿀팁? 하나면 충분!');
    } else if (category === 'recommend') {
      if (investType) {
        filtered = shortVideos.filter(
          (v) => v.category === 'recommend' && v.investType === investType
        );
      } else {
        filtered = shortVideos.filter((v) => v.category === 'recommend');
      }
      setHeader(
        '숏츠 가이드',
        investType
          ? `맞춤 추천 숏츠 – ${convertToKorLabel(investType as InvestType)}`
          : '맞춤 추천 숏츠'
      );
    }

    setFilteredVideo(filtered);
  }, [category, investType]);

  useEffect(() => {
    const itemHeight = window.innerHeight - 150;

    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: initialIndex * itemHeight,
        behavior: 'auto',
      });
    }
  }, [initialIndex, filteredVideo]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startY = 0;

    const BOTTOM_MARGIN = 150; // px
    const atTop = () => el.scrollTop <= 0;
    const atBottom = () =>
      el.scrollTop + el.clientHeight >= el.scrollHeight - BOTTOM_MARGIN;

    const onWheel = (e: WheelEvent) => {
      if ((e.deltaY < 0 && atTop()) || (e.deltaY > 0 && atBottom())) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const deltaY = startY - e.touches[0].clientY;
      if ((deltaY < 0 && atTop()) || (deltaY > 0 && atBottom())) {
        e.preventDefault();
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, [filteredVideo]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframe = entry.target.querySelector(
            'iframe'
          ) as HTMLIFrameElement;
          if (!iframe?.contentWindow) return;

          iframe.contentWindow.postMessage(
            JSON.stringify({
              event: 'command',
              func: entry.isIntersecting ? 'playVideo' : 'pauseVideo',
              args: [],
            }),
            '*'
          );

          if (!entry.isIntersecting) {
            iframe.contentWindow.postMessage(
              JSON.stringify({
                event: 'command',
                func: 'seekTo',
                args: [0, true],
              }),
              '*'
            );
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.9,
      }
    );
    const items = containerRef.current?.querySelectorAll('.video-container');
    items?.forEach((el) => observer.observe(el));

    items?.forEach((el) => {
      const iframe = el.querySelector('iframe') as HTMLIFrameElement;
      if (iframe?.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'pauseVideo',
            args: [],
          }),
          '*'
        );
      }
    });
    return () => observer.disconnect();
  }, [filteredVideo]);

  return (
    <div
      ref={containerRef}
      className='h-[calc(100vh-150px)] overflow-y-scroll scrollbar-hide snap-y snap-mandatory overscroll-y-contain'
    >
      {filteredVideo.map((video, idx) => (
        <div
          key={idx}
          className='h-[calc(100vh-150px)] overflow-y-hidden snap-start video-container'
        >
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${video.videoUrl.split('/').pop()?.split('?')[0]}?autoplay=0&mute=1&enablejsapi=1`}
            title={video.title}
            allow='autoplay; encrypted-media'
            allowFullScreen
            className='w-full h-full'
          />
        </div>
      ))}
    </div>
  );
};

export default ShortsScrollViewer;
