/**
 * Finality Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/finality.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AttestationId = components["schemas"]["AttestationId"];
export type FinalityAttestation = components["schemas"]["FinalityAttestation"];
export type FinalityAttestationListData = components["schemas"]["FinalityAttestationListData"];
export type FinalityStatus = components["schemas"]["FinalityStatus"];
export type FinalityAttestationCreateRequest = components["schemas"]["FinalityAttestationCreateRequest"];
export type Attestation = operations["listFinalityAttestations"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RecordFinalityAttestationRequestInput = NonNullable<operations["recordFinalityAttestation"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListFinalityAttestationsParams = NonNullable<operations["listFinalityAttestations"]["parameters"]["query"]>;
export type GetFinalityAttestationParams = operations["getFinalityAttestation"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListFinalityAttestationsResponse = operations["listFinalityAttestations"]["responses"]["200"]["content"]["application/json"];
export type RecordFinalityAttestationResponse = operations["recordFinalityAttestation"]["responses"]["201"]["content"]["application/json"];
export type GetFinalityAttestationResponse = operations["getFinalityAttestation"]["responses"]["200"]["content"]["application/json"];


