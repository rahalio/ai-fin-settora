/**
 * Governance Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/governance.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type GovernanceVote = components["schemas"]["GovernanceVote"];
export type GovernanceVoteListData = components["schemas"]["GovernanceVoteListData"];
export type RulebookId = components["schemas"]["RulebookId"];
export type RulebookVersion = components["schemas"]["RulebookVersion"];
export type RulebookVersionListData = components["schemas"]["RulebookVersionListData"];
export type VoteChoice = components["schemas"]["VoteChoice"];
export type VoteId = components["schemas"]["VoteId"];
export type GovernanceVoteCreateRequest = components["schemas"]["GovernanceVoteCreateRequest"];
export type RulebookVersionCreateRequest = components["schemas"]["RulebookVersionCreateRequest"];
export type SuspendParticipantRequest = components["schemas"]["SuspendParticipantRequest"];
export type Rulebook = operations["listRulebookVersions"]["responses"]["200"]["content"]["application/json"]["data"];
export type Vote = operations["listGovernanceVotes"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type PublishRulebookVersionRequestInput = NonNullable<operations["publishRulebookVersion"]["requestBody"]>["content"]["application/json"];
export type CastGovernanceVoteRequestInput = NonNullable<operations["castGovernanceVote"]["requestBody"]>["content"]["application/json"];
export type SuspendParticipantRequestInput = NonNullable<operations["suspendParticipant"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListRulebookVersionsParams = NonNullable<operations["listRulebookVersions"]["parameters"]["query"]>;
export type GetRulebookVersionParams = operations["getRulebookVersion"]["parameters"]["path"];
export type ListGovernanceVotesParams = NonNullable<operations["listGovernanceVotes"]["parameters"]["query"]>;
export type SuspendParticipantParams = operations["suspendParticipant"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListRulebookVersionsResponse = operations["listRulebookVersions"]["responses"]["200"]["content"]["application/json"];
export type PublishRulebookVersionResponse = operations["publishRulebookVersion"]["responses"]["201"]["content"]["application/json"];
export type GetRulebookVersionResponse = operations["getRulebookVersion"]["responses"]["200"]["content"]["application/json"];
export type ListGovernanceVotesResponse = operations["listGovernanceVotes"]["responses"]["200"]["content"]["application/json"];
export type CastGovernanceVoteResponse = operations["castGovernanceVote"]["responses"]["201"]["content"]["application/json"];
export type SuspendParticipantResponse = operations["suspendParticipant"]["responses"]["202"]["content"]["application/json"];


