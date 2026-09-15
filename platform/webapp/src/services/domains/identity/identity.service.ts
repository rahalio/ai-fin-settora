/**
 * Identity Service
 *
 * API client for identity domain.
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
// import type { ... } from "./identity.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawIdentityService = {
  /**
   * List API keys for the current tenant
   */
  async listTenantApiKeys(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/api-keys` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Create an API key (secret returned once)
   */
  async createTenantApiKey(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/api-keys`;

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
   * Get API key metadata
   */
  async getTenantApiKey(keyId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/api-keys/${keyId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Revoke an API key
   */
  async revokeTenantApiKey(keyId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/api-keys/${keyId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.delete<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return undefined;
  },

  /**
   * List operator users for the current tenant
   */
  async listTenantUsers(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Create an operator user (password set once)
   */
  async createTenantUser(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users`;

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
   * Get operator user metadata
   */
  async getTenantUser(userId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users/${userId}` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Update display name, role, or reset password
   */
  async updateTenantUser(userId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users/${userId}`;

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
  },

  /**
   * Disable an operator user
   */
  async disableTenantUser(userId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users/${userId}/disable`;

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
   * Re-enable an operator user
   */
  async enableTenantUser(userId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users/${userId}/enable`;

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
   * Operator login (stub)
   */
  async operatorLogin(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/auth/login`;

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
   * Current operator session
   */
  async getOperatorMe(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const url = `/v0/auth/me` + (params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '');

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
   * Update own display name
   */
  async updateOperatorMe(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/auth/me`;

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
  },

  /**
   * Refresh operator tokens (stub)
   */
  async operatorRefresh(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/auth/refresh`;

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
   * Operator logout (stub)
   */
  async operatorLogout(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/auth/logout`;

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
export const identityService = makeService(rawIdentityService, "identity");
