/**
 * Settlements Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/settlements.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type InstructionId = components["schemas"]["InstructionId"];
export type InstructionStatus = components["schemas"]["InstructionStatus"];
export type SettlementInstruction = components["schemas"]["SettlementInstruction"];
export type SettlementInstructionListData = components["schemas"]["SettlementInstructionListData"];
export type SettlementRail = components["schemas"]["SettlementRail"];
export type SettlementInstructionCreateRequest = components["schemas"]["SettlementInstructionCreateRequest"];
export type Instruction = operations["listSettlementInstructions"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateSettlementInstructionRequestInput = NonNullable<operations["createSettlementInstruction"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListSettlementInstructionsParams = NonNullable<operations["listSettlementInstructions"]["parameters"]["query"]>;
export type GetSettlementInstructionParams = operations["getSettlementInstruction"]["parameters"]["path"];
export type SendSettlementInstructionParams = operations["sendSettlementInstruction"]["parameters"]["path"];
export type CancelSettlementInstructionParams = operations["cancelSettlementInstruction"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListSettlementInstructionsResponse = operations["listSettlementInstructions"]["responses"]["200"]["content"]["application/json"];
export type CreateSettlementInstructionResponse = operations["createSettlementInstruction"]["responses"]["201"]["content"]["application/json"];
export type GetSettlementInstructionResponse = operations["getSettlementInstruction"]["responses"]["200"]["content"]["application/json"];
export type SendSettlementInstructionResponse = operations["sendSettlementInstruction"]["responses"]["200"]["content"]["application/json"];
export type CancelSettlementInstructionResponse = operations["cancelSettlementInstruction"]["responses"]["200"]["content"]["application/json"];


