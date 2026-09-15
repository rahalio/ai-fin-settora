/**
 * Participants Service
 *
 * API client for participants domain.
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
// import type { ... } from "./participants.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawParticipantsService = {
  /**
   * List participants
   */
  async listParticipants(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/participants` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Admit / register a participant
   */
  async registerParticipant(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/participants`;

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
   * Get participant
   */
  async getParticipant(participantId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/participants/${participantId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Update participant permissions / assurance
   */
  async updateParticipant(participantId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/participants/${participantId}`;

    // TODO(client): migrate when generated
    const response = await apiClient.patch<any>(url, {
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
export const participantsService = makeService(rawParticipantsService, "participants");
