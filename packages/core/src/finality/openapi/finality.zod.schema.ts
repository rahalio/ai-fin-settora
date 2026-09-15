import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const recordFinalityAttestation_Body = z
  .object({
    instructionId: z.string(),
    dealId: z.string().optional(),
    status: z.enum(['provisional', 'final', 'void']),
    jurisdiction: z.string().min(1),
    opinionVersion: z.string().optional(),
    voidReason: z.string().optional(),
  })
  .passthrough();
const FinalityStatus = z.enum(['provisional', 'final', 'void']);
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
const AttestationId = z.string();
const FinalityAttestation = z
  .object({
    attestationId: z.string().regex(/^fat_[0-9A-HJKMNP-TV-Z]{26}$/),
    instructionId: z.string(),
    dealId: z.string().optional(),
    status: z.enum(['provisional', 'final', 'void']),
    jurisdiction: z.string(),
    opinionVersion: z.string().optional(),
    voidReason: z.string().optional(),
    recordedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const FinalityAttestationListData = z
  .object({
    items: z.array(
      z
        .object({
          attestationId: z.string().regex(/^fat_[0-9A-HJKMNP-TV-Z]{26}$/),
          instructionId: z.string(),
          dealId: z.string().optional(),
          status: z.enum(['provisional', 'final', 'void']),
          jurisdiction: z.string(),
          opinionVersion: z.string().optional(),
          voidReason: z.string().optional(),
          recordedAt: z.string().datetime({ offset: true }),
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
const FinalityAttestationListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              attestationId: z.string().regex(/^fat_[0-9A-HJKMNP-TV-Z]{26}$/),
              instructionId: z.string(),
              dealId: z.string().optional(),
              status: z.enum(['provisional', 'final', 'void']),
              jurisdiction: z.string(),
              opinionVersion: z.string().optional(),
              voidReason: z.string().optional(),
              recordedAt: z.string().datetime({ offset: true }),
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
const FinalityAttestationCreateRequest = z
  .object({
    instructionId: z.string(),
    dealId: z.string().optional(),
    status: z.enum(['provisional', 'final', 'void']),
    jurisdiction: z.string().min(1),
    opinionVersion: z.string().optional(),
    voidReason: z.string().optional(),
  })
  .passthrough();
const FinalityAttestationResponse = z
  .object({
    data: z
      .object({
        attestationId: z.string().regex(/^fat_[0-9A-HJKMNP-TV-Z]{26}$/),
        instructionId: z.string(),
        dealId: z.string().optional(),
        status: z.enum(['provisional', 'final', 'void']),
        jurisdiction: z.string(),
        opinionVersion: z.string().optional(),
        voidReason: z.string().optional(),
        recordedAt: z.string().datetime({ offset: true }),
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
  recordFinalityAttestation_Body,
  FinalityStatus,
  Problem,
  AttestationId,
  FinalityAttestation,
  FinalityAttestationListData,
  ResponseMeta,
  FinalityAttestationListResponse,
  FinalityAttestationCreateRequest,
  FinalityAttestationResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/finality/attestations',
    alias: 'listFinalityAttestations',
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
        schema: z.enum(['provisional', 'final', 'void']).optional(),
      },
      {
        name: 'instructionId',
        type: 'Query',
        schema: z.string().optional(),
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
                  attestationId: z
                    .string()
                    .regex(/^fat_[0-9A-HJKMNP-TV-Z]{26}$/),
                  instructionId: z.string(),
                  dealId: z.string().optional(),
                  status: z.enum(['provisional', 'final', 'void']),
                  jurisdiction: z.string(),
                  opinionVersion: z.string().optional(),
                  voidReason: z.string().optional(),
                  recordedAt: z.string().datetime({ offset: true }),
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
    path: '/v1/finality/attestations',
    alias: 'recordFinalityAttestation',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: recordFinalityAttestation_Body,
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
            attestationId: z.string().regex(/^fat_[0-9A-HJKMNP-TV-Z]{26}$/),
            instructionId: z.string(),
            dealId: z.string().optional(),
            status: z.enum(['provisional', 'final', 'void']),
            jurisdiction: z.string(),
            opinionVersion: z.string().optional(),
            voidReason: z.string().optional(),
            recordedAt: z.string().datetime({ offset: true }),
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
    path: '/v1/finality/attestations/:attestationId',
    alias: 'getFinalityAttestation',
    requestFormat: 'json',
    parameters: [
      {
        name: 'attestationId',
        type: 'Path',
        schema: z.string().regex(/^fat_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            attestationId: z.string().regex(/^fat_[0-9A-HJKMNP-TV-Z]{26}$/),
            instructionId: z.string(),
            dealId: z.string().optional(),
            status: z.enum(['provisional', 'final', 'void']),
            jurisdiction: z.string(),
            opinionVersion: z.string().optional(),
            voidReason: z.string().optional(),
            recordedAt: z.string().datetime({ offset: true }),
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
