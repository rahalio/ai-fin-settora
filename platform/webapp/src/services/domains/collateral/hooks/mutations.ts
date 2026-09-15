/**
 * Collateral Mutation Hooks
 *
 * React Query hooks for mutating collateral data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { collateralService } from "../collateral.service";
// TODO: Import types
// import type { ... } from "../collateral.api-types";

/**
 * Hook to release collateral on finality
 *
 * Automatically invalidates collateral queries on success.
 */
export function useReleaseCollateralLock() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return collateralService.releaseCollateralLock(data);
    },
    {
      invalidateQueries: [["collateral", "Release"]],
    }
  );
}
