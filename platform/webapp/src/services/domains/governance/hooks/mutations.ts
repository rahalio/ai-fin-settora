/**
 * Governance Mutation Hooks
 *
 * React Query hooks for mutating governance data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { governanceService } from "../governance.service";
// TODO: Import types
// import type { ... } from "../governance.api-types";

/**
 * Hook to publish a rulebook / schema version
 *
 * Automatically invalidates governance queries on success.
 */
export function usePublishRulebookVersion() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return governanceService.publishRulebookVersion(data);
    },
    {
      invalidateQueries: [["governance", "Rulebook"]],
    }
  );
}

/**
 * Hook to cast a governance vote
 *
 * Automatically invalidates governance queries on success.
 */
export function useCastGovernanceVote() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return governanceService.castGovernanceVote(data);
    },
    {
      invalidateQueries: [["governance", "Vote"]],
    }
  );
}

/**
 * Hook to suspend a participant
 *
 * Automatically invalidates governance queries on success.
 */
export function useSuspendParticipant() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return governanceService.suspendParticipant(data);
    },
    {
      invalidateQueries: [["governance", "Suspend"]],
    }
  );
}
