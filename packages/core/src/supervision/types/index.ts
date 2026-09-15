/**
 * Supervision Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/supervision.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type SubscriptionId = components["schemas"]["SubscriptionId"];
export type SupervisoryFeedData = components["schemas"]["SupervisoryFeedData"];
export type SupervisoryFeedItem = components["schemas"]["SupervisoryFeedItem"];
export type SupervisorySubscription = components["schemas"]["SupervisorySubscription"];
export type SupervisorySubscriptionListData = components["schemas"]["SupervisorySubscriptionListData"];
export type SupervisorySubscriptionCreateRequest = components["schemas"]["SupervisorySubscriptionCreateRequest"];
export type Subscription = operations["listSupervisorySubscriptions"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateSupervisorySubscriptionRequestInput = NonNullable<operations["createSupervisorySubscription"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListSupervisorySubscriptionsParams = NonNullable<operations["listSupervisorySubscriptions"]["parameters"]["query"]>;
export type GetSupervisorySubscriptionParams = operations["getSupervisorySubscription"]["parameters"]["path"];
export type GetSupervisoryFeedParams = NonNullable<operations["getSupervisoryFeed"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListSupervisorySubscriptionsResponse = operations["listSupervisorySubscriptions"]["responses"]["200"]["content"]["application/json"];
export type CreateSupervisorySubscriptionResponse = operations["createSupervisorySubscription"]["responses"]["201"]["content"]["application/json"];
export type GetSupervisorySubscriptionResponse = operations["getSupervisorySubscription"]["responses"]["200"]["content"]["application/json"];
export type GetSupervisoryFeedResponse = operations["getSupervisoryFeed"]["responses"]["200"]["content"]["application/json"];


