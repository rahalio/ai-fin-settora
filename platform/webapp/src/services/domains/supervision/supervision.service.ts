/**
 * Supervision Service
 *
 * API client for supervision domain.
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
// import type { ... } from "./supervision.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawSupervisionService = {
  /**
   * List supervisory subscriptions
   */
  async listSupervisorySubscriptions(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/supervision/subscriptions` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Grant a supervisory subscription
   */
  async createSupervisorySubscription(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/supervision/subscriptions`;

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
   * Get supervisory subscription
   */
  async getSupervisorySubscription(subscriptionId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/supervision/subscriptions/${subscriptionId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Pull near-real-time agreed fields for a subscription
   */
  async getSupervisoryFeed(subscriptionId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/supervision/subscriptions/${subscriptionId}/feed` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
export const supervisionService = makeService(rawSupervisionService, "supervision");
