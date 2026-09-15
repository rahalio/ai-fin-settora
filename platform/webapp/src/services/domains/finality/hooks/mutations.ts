/**
 * Finality Mutation Hooks
 *
 * React Query hooks for mutating finality data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { finalityService } from "../finality.service";
// TODO: Import types
// import type { ... } from "../finality.api-types";

/**
 * Hook to record a finality attestation
 *
 * Automatically invalidates finality queries on success.
 */
export function useRecordFinalityAttestation() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return finalityService.recordFinalityAttestation(data);
    },
    {
      invalidateQueries: [["finality", "Attestation"]],
    }
  );
}
