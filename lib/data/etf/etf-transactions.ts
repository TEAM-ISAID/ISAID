// src/lib/seedEtfTransactions.ts
import { prisma } from '@/lib/prisma';

export async function seedEtfTransactions(isaAccountId: bigint) {
  await prisma.eTFTransaction.createMany({
    data: [
      // 2025년 1월 거래
      {
        etfId: 1,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 28.0,
        price: 10020.0,
        transactionAt: new Date('2025-01-02T10:00:00'),
      },
      {
        etfId: 26,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 27.0,
        price: 32010.0,
        transactionAt: new Date('2025-01-02T11:00:00'),
      },
      {
        etfId: 40,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 32.0,
        price: 32215.0,
        transactionAt: new Date('2025-01-02T10:30:00'),
      },
      {
        etfId: 318,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 22.0,
        price: 10095.0,
        transactionAt: new Date('2025-01-02T09:30:00'),
      },
      {
        etfId: 353,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 42.0,
        price: 12135.0,
        transactionAt: new Date('2025-01-02T11:30:00'),
      },

      // 2025년 2월 거래
      {
        etfId: 1,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 15.0,
        price: 9390.0,
        transactionAt: new Date('2025-02-03T09:45:00'),
      },
      {
        etfId: 26,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 10.0,
        price: 32650.0,
        transactionAt: new Date('2025-02-03T10:30:00'),
      },
      {
        etfId: 40,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 20.0,
        price: 32900.0,
        transactionAt: new Date('2025-02-03T11:15:00'),
      },
      {
        etfId: 318,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 8.0,
        price: 10400.0,
        transactionAt: new Date('2025-02-03T14:20:00'),
      },
      {
        etfId: 353,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 25.0,
        price: 13320.0,
        transactionAt: new Date('2025-02-03T15:30:00'),
      },

      // 2025년 3월 거래
      {
        etfId: 1,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 15.0,
        price: 9390.0,
        transactionAt: new Date('2025-03-03T09:45:00'),
      },
      {
        etfId: 26,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 10.0,
        price: 33904.0,
        transactionAt: new Date('2025-03-03T10:30:00'),
      },
      {
        etfId: 40,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 20.0,
        price: 34210.0,
        transactionAt: new Date('2025-03-03T11:15:00'),
      },
      {
        etfId: 353,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 15.0,
        price: 12970.0,
        transactionAt: new Date('2025-03-03T15:30:00'),
      },

      // 2025년 4월 거래
      {
        etfId: 197,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 25.0,
        price: 40500.0,
        transactionAt: new Date('2025-04-03T09:45:00'),
      },
      {
        etfId: 295,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 30.0,
        price: 13090.0,
        transactionAt: new Date('2025-04-03T09:45:00'),
      },
      {
        etfId: 353,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 10.0,
        price: 13320.0,
        transactionAt: new Date('2025-04-03T10:30:00'),
      },

      // 2025년 5월 거래
      {
        etfId: 26,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 10.0,
        price: 34440.0,
        transactionAt: new Date('2025-05-12T09:45:00'),
      },
      {
        etfId: 197,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 15.0,
        price: 47812.0,
        transactionAt: new Date('2025-05-13T09:45:00'),
      },
      {
        etfId: 295,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 10.0,
        price: 13125.0,
        transactionAt: new Date('2025-05-22T12:43:00'),
      },
      {
        etfId: 353,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 10.0,
        price: 12760.0,
        transactionAt: new Date('2025-05-27T10:30:00'),
      },

      // 2025년 6월 거래
      {
        etfId: 1,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 10.0,
        price: 8855.0,
        transactionAt: new Date('2025-06-04T09:45:00'),
      },
      {
        etfId: 26,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 28.0,
        price: 39640.0,
        transactionAt: new Date('2025-06-18T09:45:00'),
      },
      {
        etfId: 197,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 5.0,
        price: 49915.0,
        transactionAt: new Date('2025-06-18T09:45:00'),
      },
      {
        etfId: 295,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 10.0,
        price: 13125.0,
        transactionAt: new Date('2025-06-09T12:43:00'),
      },
      {
        etfId: 318,
        isaAccountId,
        transactionType: 'SELL',
        quantity: 14.0,
        price: 12500.0,
        transactionAt: new Date('2025-06-05T10:30:00'),
      },
      {
        etfId: 353,
        isaAccountId,
        transactionType: 'BUY',
        quantity: 10.0,
        price: 13900.0,
        transactionAt: new Date('2025-06-16T10:30:00'),
      },
    ],
    skipDuplicates: true, // 이미 존재하는 레코드는 삽입하지 않습니다
  });
}
