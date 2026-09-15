/**
 * Identity Query Hooks
 *
 * React Query hooks for fetching identity data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { identityService } from "../identity.service";

/**
 * Hook to list api keys for the current tenant
 *
 * Query key: ["identity", "ApiKey", ]
 */
export function useListTenantApiKeys(params?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "ApiKey", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return identityService.listTenantApiKeys(params, signal);
    }
  );
}

/**
 * Hook to get api key metadata
 *
 * Query key: ["identity", "ApiKey", keyId]
 */
export function useGetTenantApiKey(keyId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "ApiKey", keyId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return identityService.getTenantApiKey(keyId, params, signal);
    },
    {
      enabled: !!keyId
    }
  );
}

/**
 * Hook to list operator users for the current tenant
 *
 * Query key: ["identity", "User", ]
 */
export function useListTenantUsers(params?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "User", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return identityService.listTenantUsers(params, signal);
    }
  );
}

/**
 * Hook to get operator user metadata
 *
 * Query key: ["identity", "User", userId]
 */
export function useGetTenantUser(userId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "User", userId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return identityService.getTenantUser(userId, params, signal);
    },
    {
      enabled: !!userId
    }
  );
}

/**
 * Hook to current operator session
 *
 * Query key: ["identity", "Me", ]
 */
export function useGetOperatorMe(params?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "Me", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return identityService.getOperatorMe(params, signal);
    }
  );
}
