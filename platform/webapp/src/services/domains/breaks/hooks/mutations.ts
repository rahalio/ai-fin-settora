/**
 * Breaks Mutation Hooks
 *
 * React Query hooks for mutating breaks data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { breaksService } from "../breaks.service";
// TODO: Import types
// import type { ... } from "../breaks.api-types";

/**
 * Hook to open a break case
 *
 * Automatically invalidates breaks queries on success.
 */
export function useOpenBreakCase() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return breaksService.openBreakCase(data);
    },
    {
      invalidateQueries: [["breaks", "Break"]],
    }
  );
}

/**
 * Hook to assign owner and optional deadline
 *
 * Automatically invalidates breaks queries on success.
 */
export function useAssignBreakCase() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return breaksService.assignBreakCase(data);
    },
    {
      invalidateQueries: [["breaks", "Assign"]],
    }
  );
}

/**
 * Hook to resolve a break case
 *
 * Automatically invalidates breaks queries on success.
 */
export function useResolveBreakCase() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return breaksService.resolveBreakCase(data);
    },
    {
      invalidateQueries: [["breaks", "Resolve"]],
    }
  );
}

/**
 * Hook to escalate before fail-to-settle deadline
 *
 * Automatically invalidates breaks queries on success.
 */
export function useEscalateBreakCase() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return breaksService.escalateBreakCase(data);
    },
    {
      invalidateQueries: [["breaks", "Escalate"]],
    }
  );
}
