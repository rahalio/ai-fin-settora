/**
 * Deals Service
 *
 * API client for deals domain.
 * Uses ApiResponse<T> pattern - response.data is already T.
 *
 * TODO(client): Migrate all endpoints to typed client when generated.
 * Currently using apiClient.get/post() as temporary fallback.
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";
import { validateApiResponse, formatValidationError } from "@/services/shared/contracts";
// TODO: Import schemas from contracts
// import { ... } from "./contracts";
// TODO: Import types from api-types
// import type { ... } from "./deals.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawDealsService = {
  /**
   * List deals (shared blotter)
   */
  async listTradeDeals(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Create a trade deal
   */
  async createTradeDeal(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals`;

    // TODO(client): migrate when generated
    const response = await apiClient.post<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Get deal
   */
  async getTradeDeal(dealId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals/${dealId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * List party assertions for a deal
   */
  async listDealAssertions(dealId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals/${dealId}/assertions` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Submit a party state assertion
   */
  async submitStateAssertion(dealId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals/${dealId}/assertions`;

    // TODO(client): migrate when generated
    const response = await apiClient.post<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Get current agreed state
   */
  async getAgreedState(dealId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals/${dealId}/agreed-state` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Freeze disputed fields (rest of book continues)
   */
  async freezeDealFields(dealId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals/${dealId}/freeze-fields`;

    // TODO(client): migrate when generated
    const response = await apiClient.post<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * List CA/TF milestones
   */
  async listDocumentMilestones(dealId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals/${dealId}/milestones` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Attest a documentary milestone
   */
  async attestDocumentMilestone(dealId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals/${dealId}/milestones`;

    // TODO(client): migrate when generated
    const response = await apiClient.post<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * List corporate-action events
   */
  async listCorporateActionEvents(dealId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals/${dealId}/corporate-actions` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Record a corporate-action event
   */
  async recordCorporateActionEvent(dealId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/deals/${dealId}/corporate-actions`;

    // TODO(client): migrate when generated
    const response = await apiClient.post<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Query asset / rehypothecation provenance chain
   */
  async getAssetProvenance(assetId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/provenance/${assetId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  }
};

// Wrap service with error handling and logging
export const dealsService = makeService(rawDealsService, "deals");
