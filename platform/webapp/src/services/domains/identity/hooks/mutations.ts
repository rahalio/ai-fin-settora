/**
 * Identity Mutation Hooks
 *
 * React Query hooks for mutating identity data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { identityService } from "../identity.service";
// TODO: Import types
// import type { ... } from "../identity.api-types";

/**
 * Hook to create an api key (secret returned once)
 *
 * Automatically invalidates identity queries on success.
 */
export function useCreateTenantApiKey() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.createTenantApiKey(data);
    },
    {
      invalidateQueries: [["identity", "ApiKey"]],
    }
  );
}

/**
 * Hook to revoke an api key
 *
 * Automatically invalidates identity queries on success.
 */
export function useRevokeTenantApiKey() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.revokeTenantApiKey(data);
    },
    {
      invalidateQueries: [["identity", "ApiKey"]],
    }
  );
}

/**
 * Hook to create an operator user (password set once)
 *
 * Automatically invalidates identity queries on success.
 */
export function useCreateTenantUser() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.createTenantUser(data);
    },
    {
      invalidateQueries: [["identity", "User"]],
    }
  );
}

/**
 * Hook to update display name, role, or reset password
 *
 * Automatically invalidates identity queries on success.
 */
export function useUpdateTenantUser() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.updateTenantUser(data);
    },
    {
      invalidateQueries: [["identity", "User"]],
    }
  );
}

/**
 * Hook to disable an operator user
 *
 * Automatically invalidates identity queries on success.
 */
export function useDisableTenantUser() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.disableTenantUser(data);
    },
    {
      invalidateQueries: [["identity", "Disable"]],
    }
  );
}

/**
 * Hook to re-enable an operator user
 *
 * Automatically invalidates identity queries on success.
 */
export function useEnableTenantUser() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.enableTenantUser(data);
    },
    {
      invalidateQueries: [["identity", "Enable"]],
    }
  );
}

/**
 * Hook to operator login (stub)
 *
 * Automatically invalidates identity queries on success.
 */
export function useOperatorLogin() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.operatorLogin(data);
    },
    {
      invalidateQueries: [["identity", "Login"]],
    }
  );
}

/**
 * Hook to update own display name
 *
 * Automatically invalidates identity queries on success.
 */
export function useUpdateOperatorMe() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.updateOperatorMe(data);
    },
    {
      invalidateQueries: [["identity", "Me"]],
    }
  );
}

/**
 * Hook to refresh operator tokens (stub)
 *
 * Automatically invalidates identity queries on success.
 */
export function useOperatorRefresh() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.operatorRefresh(data);
    },
    {
      invalidateQueries: [["identity", "Refresh"]],
    }
  );
}

/**
 * Hook to operator logout (stub)
 *
 * Automatically invalidates identity queries on success.
 */
export function useOperatorLogout() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return identityService.operatorLogout(data);
    },
    {
      invalidateQueries: [["identity", "Logout"]],
    }
  );
}
