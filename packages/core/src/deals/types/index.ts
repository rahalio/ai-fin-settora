/**
 * Deals Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/deals.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AgreedState = components["schemas"]["AgreedState"];
export type AssertionId = components["schemas"]["AssertionId"];
export type CorporateActionEvent = components["schemas"]["CorporateActionEvent"];
export type CorporateActionEventListData = components["schemas"]["CorporateActionEventListData"];
export type CorporateActionId = components["schemas"]["CorporateActionId"];
export type DealId = components["schemas"]["DealId"];
export type DealStatus = components["schemas"]["DealStatus"];
export type DealType = components["schemas"]["DealType"];
export type DocumentMilestone = components["schemas"]["DocumentMilestone"];
export type DocumentMilestoneListData = components["schemas"]["DocumentMilestoneListData"];
export type MilestoneId = components["schemas"]["MilestoneId"];
export type ProvenanceLink = components["schemas"]["ProvenanceLink"];
export type ProvenanceRecord = components["schemas"]["ProvenanceRecord"];
export type StateAssertion = components["schemas"]["StateAssertion"];
export type StateAssertionListData = components["schemas"]["StateAssertionListData"];
export type TradeDeal = components["schemas"]["TradeDeal"];
export type TradeDealListData = components["schemas"]["TradeDealListData"];
export type CorporateActionEventCreateRequest = components["schemas"]["CorporateActionEventCreateRequest"];
export type DocumentMilestoneCreateRequest = components["schemas"]["DocumentMilestoneCreateRequest"];
export type FreezeFieldsRequest = components["schemas"]["FreezeFieldsRequest"];
export type StateAssertionCreateRequest = components["schemas"]["StateAssertionCreateRequest"];
export type TradeDealCreateRequest = components["schemas"]["TradeDealCreateRequest"];
export type Deal = operations["listTradeDeals"]["responses"]["200"]["content"]["application/json"]["data"];
export type Assertion = operations["listDealAssertions"]["responses"]["200"]["content"]["application/json"]["data"];
export type Milestone = operations["listDocumentMilestones"]["responses"]["200"]["content"]["application/json"]["data"];
export type CorporateAction = operations["listCorporateActionEvents"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateTradeDealRequestInput = NonNullable<operations["createTradeDeal"]["requestBody"]>["content"]["application/json"];
export type SubmitStateAssertionRequestInput = NonNullable<operations["submitStateAssertion"]["requestBody"]>["content"]["application/json"];
export type FreezeDealFieldsRequestInput = NonNullable<operations["freezeDealFields"]["requestBody"]>["content"]["application/json"];
export type AttestDocumentMilestoneRequestInput = NonNullable<operations["attestDocumentMilestone"]["requestBody"]>["content"]["application/json"];
export type RecordCorporateActionEventRequestInput = NonNullable<operations["recordCorporateActionEvent"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListTradeDealsParams = NonNullable<operations["listTradeDeals"]["parameters"]["query"]>;
export type GetTradeDealParams = operations["getTradeDeal"]["parameters"]["path"];
export type ListDealAssertionsParams = NonNullable<operations["listDealAssertions"]["parameters"]["query"]>;
export type SubmitStateAssertionParams = operations["submitStateAssertion"]["parameters"]["path"];
export type GetAgreedStateParams = operations["getAgreedState"]["parameters"]["path"];
export type FreezeDealFieldsParams = operations["freezeDealFields"]["parameters"]["path"];
export type ListDocumentMilestonesParams = operations["listDocumentMilestones"]["parameters"]["path"];
export type AttestDocumentMilestoneParams = operations["attestDocumentMilestone"]["parameters"]["path"];
export type ListCorporateActionEventsParams = operations["listCorporateActionEvents"]["parameters"]["path"];
export type RecordCorporateActionEventParams = operations["recordCorporateActionEvent"]["parameters"]["path"];
export type GetAssetProvenanceParams = operations["getAssetProvenance"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListTradeDealsResponse = operations["listTradeDeals"]["responses"]["200"]["content"]["application/json"];
export type CreateTradeDealResponse = operations["createTradeDeal"]["responses"]["201"]["content"]["application/json"];
export type GetTradeDealResponse = operations["getTradeDeal"]["responses"]["200"]["content"]["application/json"];
export type ListDealAssertionsResponse = operations["listDealAssertions"]["responses"]["200"]["content"]["application/json"];
export type SubmitStateAssertionResponse = operations["submitStateAssertion"]["responses"]["201"]["content"]["application/json"];
export type GetAgreedStateResponse = operations["getAgreedState"]["responses"]["200"]["content"]["application/json"];
export type FreezeDealFieldsResponse = operations["freezeDealFields"]["responses"]["200"]["content"]["application/json"];
export type ListDocumentMilestonesResponse = operations["listDocumentMilestones"]["responses"]["200"]["content"]["application/json"];
export type AttestDocumentMilestoneResponse = operations["attestDocumentMilestone"]["responses"]["201"]["content"]["application/json"];
export type ListCorporateActionEventsResponse = operations["listCorporateActionEvents"]["responses"]["200"]["content"]["application/json"];
export type RecordCorporateActionEventResponse = operations["recordCorporateActionEvent"]["responses"]["201"]["content"]["application/json"];
export type GetAssetProvenanceResponse = operations["getAssetProvenance"]["responses"]["200"]["content"]["application/json"];


