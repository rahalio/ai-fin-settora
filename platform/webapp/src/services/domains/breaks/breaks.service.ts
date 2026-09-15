/**
 * Breaks Service
 *
 * API client for breaks domain.
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
// import type { ... } from "./breaks.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawBreaksService = {
  /**
   * List break cases
   */
  async listBreakCases(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/breaks` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Open a break case
   */
  async openBreakCase(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/breaks`;

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
   * Get break case
   */
  async getBreakCase(breakId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/breaks/${breakId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Assign owner and optional deadline
   */
  async assignBreakCase(breakId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/breaks/${breakId}/assign`;

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
   * Resolve a break case
   */
  async resolveBreakCase(breakId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/breaks/${breakId}/resolve`;

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
   * Escalate before fail-to-settle deadline
   */
  async escalateBreakCase(breakId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/breaks/${breakId}/escalate`;

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
  }
};

// Wrap service with error handling and logging
export const breaksService = makeService(rawBreaksService, "breaks");
