/**
 * Collateral Query Hooks
 *
 * React Query hooks for fetching collateral data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { collateralService } from "../collateral.service";

/**
 * Hook to list collateral locks
 *
 * Query key: ["collateral", "Lock", ]
 */
export function useListCollateralLocks(params?: Record<string, any>) {
  return useTenantQuery(
    ["collateral", "Lock", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return collateralService.listCollateralLocks(params, signal);
    }
  );
}

/**
 * Hook to get collateral lock
 *
 * Query key: ["collateral", "Lock", lockId]
 */
export function useGetCollateralLock(lockId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["collateral", "Lock", lockId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return collateralService.getCollateralLock(lockId, params, signal);
    },
    {
      enabled: !!lockId
    }
  );
}
