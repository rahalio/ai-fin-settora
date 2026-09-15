/**
 * Finality Service
 *
 * API client for finality domain.
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
// import type { ... } from "./finality.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawFinalityService = {
  /**
   * List finality attestations
   */
  async listFinalityAttestations(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/finality/attestations` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Record a finality attestation
   */
  async recordFinalityAttestation(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/finality/attestations`;

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
   * Get finality attestation
   */
  async getFinalityAttestation(attestationId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/finality/attestations/${attestationId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
export const finalityService = makeService(rawFinalityService, "finality");
