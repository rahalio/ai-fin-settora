/**
 * Governance Service
 *
 * API client for governance domain.
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
// import type { ... } from "./governance.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawGovernanceService = {
  /**
   * List rulebook versions
   */
  async listRulebookVersions(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/governance/rulebooks` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Publish a rulebook / schema version
   */
  async publishRulebookVersion(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/governance/rulebooks`;

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
   * Get rulebook version
   */
  async getRulebookVersion(rulebookId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/governance/rulebooks/${rulebookId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * List governance votes
   */
  async listGovernanceVotes(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v1/governance/votes` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Cast a governance vote
   */
  async castGovernanceVote(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/governance/votes`;

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
   * Suspend a participant
   */
  async suspendParticipant(participantId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/participants/${participantId}/suspend`;

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
export const governanceService = makeService(rawGovernanceService, "governance");
