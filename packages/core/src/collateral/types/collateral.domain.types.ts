/**
 * Collateral Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/collateral.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type CollateralLock = components["schemas"]["CollateralLock"];
export type CollateralLockListData = components["schemas"]["CollateralLockListData"];
export type CollateralLockStatus = components["schemas"]["CollateralLockStatus"];
export type LockId = components["schemas"]["LockId"];
export type CollateralReleaseRequest = components["schemas"]["CollateralReleaseRequest"];
export type Lock = operations["listCollateralLocks"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type ReleaseCollateralLockRequestInput = NonNullable<operations["releaseCollateralLock"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListCollateralLocksParams = NonNullable<operations["listCollateralLocks"]["parameters"]["query"]>;
export type GetCollateralLockParams = operations["getCollateralLock"]["parameters"]["path"];
export type ReleaseCollateralLockParams = operations["releaseCollateralLock"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListCollateralLocksResponse = operations["listCollateralLocks"]["responses"]["200"]["content"]["application/json"];
export type GetCollateralLockResponse = operations["getCollateralLock"]["responses"]["200"]["content"]["application/json"];
export type ReleaseCollateralLockResponse = operations["releaseCollateralLock"]["responses"]["200"]["content"]["application/json"];


