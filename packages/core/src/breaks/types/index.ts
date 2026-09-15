/**
 * Breaks Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/breaks.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type BreakCase = components["schemas"]["BreakCase"];
export type BreakCaseListData = components["schemas"]["BreakCaseListData"];
export type BreakId = components["schemas"]["BreakId"];
export type BreakStatus = components["schemas"]["BreakStatus"];
export type BreakAssignRequest = components["schemas"]["BreakAssignRequest"];
export type BreakCaseCreateRequest = components["schemas"]["BreakCaseCreateRequest"];
export type BreakEscalateRequest = components["schemas"]["BreakEscalateRequest"];
export type BreakResolveRequest = components["schemas"]["BreakResolveRequest"];
export type Break = operations["listBreakCases"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type OpenBreakCaseRequestInput = NonNullable<operations["openBreakCase"]["requestBody"]>["content"]["application/json"];
export type AssignBreakCaseRequestInput = NonNullable<operations["assignBreakCase"]["requestBody"]>["content"]["application/json"];
export type ResolveBreakCaseRequestInput = NonNullable<operations["resolveBreakCase"]["requestBody"]>["content"]["application/json"];
export type EscalateBreakCaseRequestInput = NonNullable<operations["escalateBreakCase"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListBreakCasesParams = NonNullable<operations["listBreakCases"]["parameters"]["query"]>;
export type GetBreakCaseParams = operations["getBreakCase"]["parameters"]["path"];
export type AssignBreakCaseParams = operations["assignBreakCase"]["parameters"]["path"];
export type ResolveBreakCaseParams = operations["resolveBreakCase"]["parameters"]["path"];
export type EscalateBreakCaseParams = operations["escalateBreakCase"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListBreakCasesResponse = operations["listBreakCases"]["responses"]["200"]["content"]["application/json"];
export type OpenBreakCaseResponse = operations["openBreakCase"]["responses"]["201"]["content"]["application/json"];
export type GetBreakCaseResponse = operations["getBreakCase"]["responses"]["200"]["content"]["application/json"];
export type AssignBreakCaseResponse = operations["assignBreakCase"]["responses"]["200"]["content"]["application/json"];
export type ResolveBreakCaseResponse = operations["resolveBreakCase"]["responses"]["200"]["content"]["application/json"];
export type EscalateBreakCaseResponse = operations["escalateBreakCase"]["responses"]["200"]["content"]["application/json"];


