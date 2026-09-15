import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const publishRulebookVersion_Body = z
  .object({
    version: z.string().min(1),
    effectiveFrom: z.string().datetime({ offset: true }),
    summary: z.string().optional(),
    schemaDiff: z.string().optional(),
  })
  .passthrough();
const castGovernanceVote_Body = z
  .object({
    proposal: z.string().min(1),
    voterParticipantId: z.string(),
    vote: z.enum(['for', 'against', 'abstain']),
  })
  .passthrough();
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
const RulebookId = z.string();
const RulebookVersion = z
  .object({
    rulebookId: z.string().regex(/^rlb_[0-9A-HJKMNP-TV-Z]{26}$/),
    version: z.string(),
    effectiveFrom: z.string().datetime({ offset: true }),
    summary: z.string().optional(),
    schemaDiff: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const RulebookVersionListData = z
  .object({
    items: z.array(
      z
        .object({
          rulebookId: z.string().regex(/^rlb_[0-9A-HJKMNP-TV-Z]{26}$/),
          version: z.string(),
          effectiveFrom: z.string().datetime({ offset: true }),
          summary: z.string().optional(),
          schemaDiff: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
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
const RulebookVersionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              rulebookId: z.string().regex(/^rlb_[0-9A-HJKMNP-TV-Z]{26}$/),
              version: z.string(),
              effectiveFrom: z.string().datetime({ offset: true }),
              summary: z.string().optional(),
              schemaDiff: z.string().optional(),
              createdAt: z.string().datetime({ offset: true }),
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
const RulebookVersionCreateRequest = z
  .object({
    version: z.string().min(1),
    effectiveFrom: z.string().datetime({ offset: true }),
    summary: z.string().optional(),
    schemaDiff: z.string().optional(),
  })
  .passthrough();
const RulebookVersionResponse = z
  .object({
    data: z
      .object({
        rulebookId: z.string().regex(/^rlb_[0-9A-HJKMNP-TV-Z]{26}$/),
        version: z.string(),
        effectiveFrom: z.string().datetime({ offset: true }),
        summary: z.string().optional(),
        schemaDiff: z.string().optional(),
        createdAt: z.string().datetime({ offset: true }),
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
const VoteId = z.string();
const VoteChoice = z.enum(['for', 'against', 'abstain']);
const GovernanceVote = z
  .object({
    voteId: z.string().regex(/^vot_[0-9A-HJKMNP-TV-Z]{26}$/),
    proposal: z.string(),
    voterParticipantId: z.string(),
    vote: z.enum(['for', 'against', 'abstain']),
    votedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const GovernanceVoteListData = z
  .object({
    items: z.array(
      z
        .object({
          voteId: z.string().regex(/^vot_[0-9A-HJKMNP-TV-Z]{26}$/),
          proposal: z.string(),
          voterParticipantId: z.string(),
          vote: z.enum(['for', 'against', 'abstain']),
          votedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const GovernanceVoteListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              voteId: z.string().regex(/^vot_[0-9A-HJKMNP-TV-Z]{26}$/),
              proposal: z.string(),
              voterParticipantId: z.string(),
              vote: z.enum(['for', 'against', 'abstain']),
              votedAt: z.string().datetime({ offset: true }),
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
const GovernanceVoteCreateRequest = z
  .object({
    proposal: z.string().min(1),
    voterParticipantId: z.string(),
    vote: z.enum(['for', 'against', 'abstain']),
  })
  .passthrough();
const GovernanceVoteResponse = z
  .object({
    data: z
      .object({
        voteId: z.string().regex(/^vot_[0-9A-HJKMNP-TV-Z]{26}$/),
        proposal: z.string(),
        voterParticipantId: z.string(),
        vote: z.enum(['for', 'against', 'abstain']),
        votedAt: z.string().datetime({ offset: true }),
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
const SuspendParticipantRequest = z
  .object({ reason: z.string().min(1) })
  .passthrough();
const SuspendParticipantResponse = z
  .object({
    data: z
      .object({
        participantId: z.string(),
        status: z.literal('suspended'),
        reason: z.string(),
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
  publishRulebookVersion_Body,
  castGovernanceVote_Body,
  Problem,
  RulebookId,
  RulebookVersion,
  RulebookVersionListData,
  ResponseMeta,
  RulebookVersionListResponse,
  RulebookVersionCreateRequest,
  RulebookVersionResponse,
  VoteId,
  VoteChoice,
  GovernanceVote,
  GovernanceVoteListData,
  GovernanceVoteListResponse,
  GovernanceVoteCreateRequest,
  GovernanceVoteResponse,
  SuspendParticipantRequest,
  SuspendParticipantResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/governance/rulebooks',
    alias: 'listRulebookVersions',
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
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  rulebookId: z.string().regex(/^rlb_[0-9A-HJKMNP-TV-Z]{26}$/),
                  version: z.string(),
                  effectiveFrom: z.string().datetime({ offset: true }),
                  summary: z.string().optional(),
                  schemaDiff: z.string().optional(),
                  createdAt: z.string().datetime({ offset: true }),
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
    path: '/v1/governance/rulebooks',
    alias: 'publishRulebookVersion',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: publishRulebookVersion_Body,
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
            rulebookId: z.string().regex(/^rlb_[0-9A-HJKMNP-TV-Z]{26}$/),
            version: z.string(),
            effectiveFrom: z.string().datetime({ offset: true }),
            summary: z.string().optional(),
            schemaDiff: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    path: '/v1/governance/rulebooks/:rulebookId',
    alias: 'getRulebookVersion',
    requestFormat: 'json',
    parameters: [
      {
        name: 'rulebookId',
        type: 'Path',
        schema: z.string().regex(/^rlb_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            rulebookId: z.string().regex(/^rlb_[0-9A-HJKMNP-TV-Z]{26}$/),
            version: z.string(),
            effectiveFrom: z.string().datetime({ offset: true }),
            summary: z.string().optional(),
            schemaDiff: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    method: 'get',
    path: '/v1/governance/votes',
    alias: 'listGovernanceVotes',
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
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  voteId: z.string().regex(/^vot_[0-9A-HJKMNP-TV-Z]{26}$/),
                  proposal: z.string(),
                  voterParticipantId: z.string(),
                  vote: z.enum(['for', 'against', 'abstain']),
                  votedAt: z.string().datetime({ offset: true }),
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
    path: '/v1/governance/votes',
    alias: 'castGovernanceVote',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: castGovernanceVote_Body,
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
            voteId: z.string().regex(/^vot_[0-9A-HJKMNP-TV-Z]{26}$/),
            proposal: z.string(),
            voterParticipantId: z.string(),
            vote: z.enum(['for', 'against', 'abstain']),
            votedAt: z.string().datetime({ offset: true }),
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
    method: 'post',
    path: '/v1/participants/:participantId/suspend',
    alias: 'suspendParticipant',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ reason: z.string().min(1) }).passthrough(),
      },
      {
        name: 'participantId',
        type: 'Path',
        schema: z.string(),
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
            participantId: z.string(),
            status: z.literal('suspended'),
            reason: z.string(),
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
