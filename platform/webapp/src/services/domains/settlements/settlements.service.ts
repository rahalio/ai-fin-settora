/**
 * Settlements Service
 *
 * API client for settlements domain.
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
// import type { ... } from "./settlements.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawSettlementsService = {
  /**
   * List settlement instructions
   */
  async listSettlementInstructions(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/settlements/instructions` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Create instruction from agreed state
   */
  async createSettlementInstruction(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/settlements/instructions`;

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
   * Get settlement instruction
   */
  async getSettlementInstruction(instructionId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/settlements/instructions/${instructionId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Send instruction to incumbent rail
   */
  async sendSettlementInstruction(instructionId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/settlements/instructions/${instructionId}/send`;

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
   * Cancel instruction pre-rail
   */
  async cancelSettlementInstruction(instructionId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/settlements/instructions/${instructionId}/cancel`;

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
export const settlementsService = makeService(rawSettlementsService, "settlements");
