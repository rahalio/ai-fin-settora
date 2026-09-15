/**
 * Participants Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/participants.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type Participant = components["schemas"]["Participant"];
export type ParticipantId = components["schemas"]["ParticipantId"];
export type ParticipantListData = components["schemas"]["ParticipantListData"];
export type ParticipantRole = components["schemas"]["ParticipantRole"];
export type ParticipantStatus = components["schemas"]["ParticipantStatus"];
export type ParticipantCreateRequest = components["schemas"]["ParticipantCreateRequest"];
export type ParticipantUpdateRequest = components["schemas"]["ParticipantUpdateRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RegisterParticipantRequestInput = NonNullable<operations["registerParticipant"]["requestBody"]>["content"]["application/json"];
export type UpdateParticipantRequestInput = NonNullable<operations["updateParticipant"]["requestBody"]>["content"]["application/json"];
export type UpdateParticipantRequest = UpdateParticipantRequestInput;


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListParticipantsParams = NonNullable<operations["listParticipants"]["parameters"]["query"]>;
export type GetParticipantParams = operations["getParticipant"]["parameters"]["path"];
export type UpdateParticipantParams = operations["updateParticipant"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListParticipantsResponse = operations["listParticipants"]["responses"]["200"]["content"]["application/json"];
export type RegisterParticipantResponse = operations["registerParticipant"]["responses"]["201"]["content"]["application/json"];
export type GetParticipantResponse = operations["getParticipant"]["responses"]["200"]["content"]["application/json"];
export type UpdateParticipantResponse = operations["updateParticipant"]["responses"]["200"]["content"]["application/json"];


