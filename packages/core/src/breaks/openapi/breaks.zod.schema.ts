import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const openBreakCase_Body = z
  .object({
    dealId: z.string(),
    conflictingFields: z.array(z.string()).min(1),
    assertionIds: z.array(z.string()).optional(),
    ownerParticipantId: z.string().optional(),
    dueAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const assignBreakCase_Body = z
  .object({
    ownerParticipantId: z.string(),
    dueAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const escalateBreakCase_Body = z
  .object({
    reason: z.string().min(1),
    ownerParticipantId: z.string().optional(),
  })
  .passthrough();
const BreakStatus = z.enum(['open', 'investigating', 'resolved', 'escalated']);
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
const BreakId = z.string();
const BreakCase = z
  .object({
    breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
    dealId: z.string(),
    conflictingFields: z.array(z.string()),
    status: z.enum(['open', 'investigating', 'resolved', 'escalated']),
    ownerParticipantId: z.string().optional(),
    dueAt: z.string().datetime({ offset: true }).optional(),
    openedAt: z.string().datetime({ offset: true }),
    resolvedAt: z.string().datetime({ offset: true }).optional(),
    resolutionNote: z.string().optional(),
    escalationReason: z.string().optional(),
  })
  .passthrough();
const BreakCaseListData = z
  .object({
    items: z.array(
      z
        .object({
          breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
          dealId: z.string(),
          conflictingFields: z.array(z.string()),
          status: z.enum(['open', 'investigating', 'resolved', 'escalated']),
          ownerParticipantId: z.string().optional(),
          dueAt: z.string().datetime({ offset: true }).optional(),
          openedAt: z.string().datetime({ offset: true }),
          resolvedAt: z.string().datetime({ offset: true }).optional(),
          resolutionNote: z.string().optional(),
          escalationReason: z.string().optional(),
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
const BreakCaseListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
              dealId: z.string(),
              conflictingFields: z.array(z.string()),
              status: z.enum([
                'open',
                'investigating',
                'resolved',
                'escalated',
              ]),
              ownerParticipantId: z.string().optional(),
              dueAt: z.string().datetime({ offset: true }).optional(),
              openedAt: z.string().datetime({ offset: true }),
              resolvedAt: z.string().datetime({ offset: true }).optional(),
              resolutionNote: z.string().optional(),
              escalationReason: z.string().optional(),
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
const BreakCaseCreateRequest = z
  .object({
    dealId: z.string(),
    conflictingFields: z.array(z.string()).min(1),
    assertionIds: z.array(z.string()).optional(),
    ownerParticipantId: z.string().optional(),
    dueAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const BreakCaseResponse = z
  .object({
    data: z
      .object({
        breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
        dealId: z.string(),
        conflictingFields: z.array(z.string()),
        status: z.enum(['open', 'investigating', 'resolved', 'escalated']),
        ownerParticipantId: z.string().optional(),
        dueAt: z.string().datetime({ offset: true }).optional(),
        openedAt: z.string().datetime({ offset: true }),
        resolvedAt: z.string().datetime({ offset: true }).optional(),
        resolutionNote: z.string().optional(),
        escalationReason: z.string().optional(),
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
const BreakAssignRequest = z
  .object({
    ownerParticipantId: z.string(),
    dueAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const BreakResolveRequest = z
  .object({ resolutionNote: z.string().min(1) })
  .passthrough();
const BreakEscalateRequest = z
  .object({
    reason: z.string().min(1),
    ownerParticipantId: z.string().optional(),
  })
  .passthrough();

export const schemas: any = {
  openBreakCase_Body,
  assignBreakCase_Body,
  escalateBreakCase_Body,
  BreakStatus,
  Problem,
  BreakId,
  BreakCase,
  BreakCaseListData,
  ResponseMeta,
  BreakCaseListResponse,
  BreakCaseCreateRequest,
  BreakCaseResponse,
  BreakAssignRequest,
  BreakResolveRequest,
  BreakEscalateRequest,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/breaks',
    alias: 'listBreakCases',
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
        name: 'status',
        type: 'Query',
        schema: z
          .enum(['open', 'investigating', 'resolved', 'escalated'])
          .optional(),
      },
      {
        name: 'dealId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
                  dealId: z.string(),
                  conflictingFields: z.array(z.string()),
                  status: z.enum([
                    'open',
                    'investigating',
                    'resolved',
                    'escalated',
                  ]),
                  ownerParticipantId: z.string().optional(),
                  dueAt: z.string().datetime({ offset: true }).optional(),
                  openedAt: z.string().datetime({ offset: true }),
                  resolvedAt: z.string().datetime({ offset: true }).optional(),
                  resolutionNote: z.string().optional(),
                  escalationReason: z.string().optional(),
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
    path: '/v1/breaks',
    alias: 'openBreakCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: openBreakCase_Body,
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
            breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
            dealId: z.string(),
            conflictingFields: z.array(z.string()),
            status: z.enum(['open', 'investigating', 'resolved', 'escalated']),
            ownerParticipantId: z.string().optional(),
            dueAt: z.string().datetime({ offset: true }).optional(),
            openedAt: z.string().datetime({ offset: true }),
            resolvedAt: z.string().datetime({ offset: true }).optional(),
            resolutionNote: z.string().optional(),
            escalationReason: z.string().optional(),
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
    ],
  },
  {
    method: 'get',
    path: '/v1/breaks/:breakId',
    alias: 'getBreakCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'breakId',
        type: 'Path',
        schema: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
            dealId: z.string(),
            conflictingFields: z.array(z.string()),
            status: z.enum(['open', 'investigating', 'resolved', 'escalated']),
            ownerParticipantId: z.string().optional(),
            dueAt: z.string().datetime({ offset: true }).optional(),
            openedAt: z.string().datetime({ offset: true }),
            resolvedAt: z.string().datetime({ offset: true }).optional(),
            resolutionNote: z.string().optional(),
            escalationReason: z.string().optional(),
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
    path: '/v1/breaks/:breakId/assign',
    alias: 'assignBreakCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: assignBreakCase_Body,
      },
      {
        name: 'breakId',
        type: 'Path',
        schema: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
            dealId: z.string(),
            conflictingFields: z.array(z.string()),
            status: z.enum(['open', 'investigating', 'resolved', 'escalated']),
            ownerParticipantId: z.string().optional(),
            dueAt: z.string().datetime({ offset: true }).optional(),
            openedAt: z.string().datetime({ offset: true }),
            resolvedAt: z.string().datetime({ offset: true }).optional(),
            resolutionNote: z.string().optional(),
            escalationReason: z.string().optional(),
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
    path: '/v1/breaks/:breakId/escalate',
    alias: 'escalateBreakCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: escalateBreakCase_Body,
      },
      {
        name: 'breakId',
        type: 'Path',
        schema: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
            dealId: z.string(),
            conflictingFields: z.array(z.string()),
            status: z.enum(['open', 'investigating', 'resolved', 'escalated']),
            ownerParticipantId: z.string().optional(),
            dueAt: z.string().datetime({ offset: true }).optional(),
            openedAt: z.string().datetime({ offset: true }),
            resolvedAt: z.string().datetime({ offset: true }).optional(),
            resolutionNote: z.string().optional(),
            escalationReason: z.string().optional(),
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
    path: '/v1/breaks/:breakId/resolve',
    alias: 'resolveBreakCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ resolutionNote: z.string().min(1) }).passthrough(),
      },
      {
        name: 'breakId',
        type: 'Path',
        schema: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            breakId: z.string().regex(/^brk_[0-9A-HJKMNP-TV-Z]{26}$/),
            dealId: z.string(),
            conflictingFields: z.array(z.string()),
            status: z.enum(['open', 'investigating', 'resolved', 'escalated']),
            ownerParticipantId: z.string().optional(),
            dueAt: z.string().datetime({ offset: true }).optional(),
            openedAt: z.string().datetime({ offset: true }),
            resolvedAt: z.string().datetime({ offset: true }).optional(),
            resolutionNote: z.string().optional(),
            escalationReason: z.string().optional(),
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
