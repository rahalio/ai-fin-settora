import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createSettlementInstruction_Body = z
  .object({
    dealId: z.string(),
    rail: z.enum(['csd', 'ccp', 'payment']),
    payloadRef: z.string().optional(),
  })
  .passthrough();
const InstructionStatus = z.enum([
  'created',
  'sent',
  'acknowledged',
  'failed',
  'cancelled',
]);
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const InstructionId = z.string();
const SettlementRail = z.enum(['csd', 'ccp', 'payment']);
const SettlementInstruction = z
  .object({
    instructionId: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
    dealId: z.string(),
    rail: z.enum(['csd', 'ccp', 'payment']),
    status: z.enum(['created', 'sent', 'acknowledged', 'failed', 'cancelled']),
    payloadRef: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    sentAt: z.string().datetime({ offset: true }).optional(),
    acknowledgedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const SettlementInstructionListData = z
  .object({
    items: z.array(
      z
        .object({
          instructionId: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
          dealId: z.string(),
          rail: z.enum(['csd', 'ccp', 'payment']),
          status: z.enum([
            'created',
            'sent',
            'acknowledged',
            'failed',
            'cancelled',
          ]),
          payloadRef: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          sentAt: z.string().datetime({ offset: true }).optional(),
          acknowledgedAt: z.string().datetime({ offset: true }).optional(),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const SettlementInstructionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              instructionId: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
              dealId: z.string(),
              rail: z.enum(['csd', 'ccp', 'payment']),
              status: z.enum([
                'created',
                'sent',
                'acknowledged',
                'failed',
                'cancelled',
              ]),
              payloadRef: z.string().optional(),
              createdAt: z.string().datetime({ offset: true }),
              sentAt: z.string().datetime({ offset: true }).optional(),
              acknowledgedAt: z.string().datetime({ offset: true }).optional(),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const SettlementInstructionCreateRequest = z
  .object({
    dealId: z.string(),
    rail: z.enum(['csd', 'ccp', 'payment']),
    payloadRef: z.string().optional(),
  })
  .passthrough();
const SettlementInstructionResponse = z
  .object({
    data: z
      .object({
        instructionId: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
        dealId: z.string(),
        rail: z.enum(['csd', 'ccp', 'payment']),
        status: z.enum([
          'created',
          'sent',
          'acknowledged',
          'failed',
          'cancelled',
        ]),
        payloadRef: z.string().optional(),
        createdAt: z.string().datetime({ offset: true }),
        sentAt: z.string().datetime({ offset: true }).optional(),
        acknowledgedAt: z.string().datetime({ offset: true }).optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();

export const schemas: any = {
  createSettlementInstruction_Body,
  InstructionStatus,
  Problem,
  InstructionId,
  SettlementRail,
  SettlementInstruction,
  SettlementInstructionListData,
  ResponseMeta,
  SettlementInstructionListResponse,
  SettlementInstructionCreateRequest,
  SettlementInstructionResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/settlements/instructions',
    alias: 'listSettlementInstructions',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
      {
        name: 'dealId',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z
          .enum(['created', 'sent', 'acknowledged', 'failed', 'cancelled'])
          .optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  instructionId: z
                    .string()
                    .regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
                  dealId: z.string(),
                  rail: z.enum(['csd', 'ccp', 'payment']),
                  status: z.enum([
                    'created',
                    'sent',
                    'acknowledged',
                    'failed',
                    'cancelled',
                  ]),
                  payloadRef: z.string().optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  sentAt: z.string().datetime({ offset: true }).optional(),
                  acknowledgedAt: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/settlements/instructions',
    alias: 'createSettlementInstruction',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createSettlementInstruction_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            instructionId: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
            dealId: z.string(),
            rail: z.enum(['csd', 'ccp', 'payment']),
            status: z.enum([
              'created',
              'sent',
              'acknowledged',
              'failed',
              'cancelled',
            ]),
            payloadRef: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            sentAt: z.string().datetime({ offset: true }).optional(),
            acknowledgedAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 422,
        description: `Semantically invalid request (e.g. PACK_EMPTY)`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/settlements/instructions/:instructionId',
    alias: 'getSettlementInstruction',
    requestFormat: 'json',
    parameters: [
      {
        name: 'instructionId',
        type: 'Path',
        schema: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            instructionId: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
            dealId: z.string(),
            rail: z.enum(['csd', 'ccp', 'payment']),
            status: z.enum([
              'created',
              'sent',
              'acknowledged',
              'failed',
              'cancelled',
            ]),
            payloadRef: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            sentAt: z.string().datetime({ offset: true }).optional(),
            acknowledgedAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/settlements/instructions/:instructionId/cancel',
    alias: 'cancelSettlementInstruction',
    requestFormat: 'json',
    parameters: [
      {
        name: 'instructionId',
        type: 'Path',
        schema: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            instructionId: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
            dealId: z.string(),
            rail: z.enum(['csd', 'ccp', 'payment']),
            status: z.enum([
              'created',
              'sent',
              'acknowledged',
              'failed',
              'cancelled',
            ]),
            payloadRef: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            sentAt: z.string().datetime({ offset: true }).optional(),
            acknowledgedAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/settlements/instructions/:instructionId/send',
    alias: 'sendSettlementInstruction',
    requestFormat: 'json',
    parameters: [
      {
        name: 'instructionId',
        type: 'Path',
        schema: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            instructionId: z.string().regex(/^ins_[0-9A-HJKMNP-TV-Z]{26}$/),
            dealId: z.string(),
            rail: z.enum(['csd', 'ccp', 'payment']),
            status: z.enum([
              'created',
              'sent',
              'acknowledged',
              'failed',
              'cancelled',
            ]),
            payloadRef: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            sentAt: z.string().datetime({ offset: true }).optional(),
            acknowledgedAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
