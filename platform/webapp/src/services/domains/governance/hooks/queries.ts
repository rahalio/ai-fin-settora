/**
 * Governance Query Hooks
 *
 * React Query hooks for fetching governance data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { governanceService } from "../governance.service";

/**
 * Hook to list rulebook versions
 *
 * Query key: ["governance", "Rulebook", ]
 */
export function useListRulebookVersions(params?: Record<string, any>) {
  return useTenantQuery(
    ["governance", "Rulebook", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return governanceService.listRulebookVersions(params, signal);
    }
  );
}

/**
 * Hook to get rulebook version
 *
 * Query key: ["governance", "Rulebook", rulebookId]
 */
export function useGetRulebookVersion(rulebookId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["governance", "Rulebook", rulebookId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return governanceService.getRulebookVersion(rulebookId, params, signal);
    },
    {
      enabled: !!rulebookId
    }
  );
}

/**
 * Hook to list governance votes
 *
 * Query key: ["governance", "Vote", ]
 */
export function useListGovernanceVotes(params?: Record<string, any>) {
  return useTenantQuery(
    ["governance", "Vote", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return governanceService.listGovernanceVotes(params, signal);
    }
  );
}
