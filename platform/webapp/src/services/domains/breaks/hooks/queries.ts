/**
 * Breaks Query Hooks
 *
 * React Query hooks for fetching breaks data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { breaksService } from "../breaks.service";

/**
 * Hook to list break cases
 *
 * Query key: ["breaks", "Break", ]
 */
export function useListBreakCases(params?: Record<string, any>) {
  return useTenantQuery(
    ["breaks", "Break", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return breaksService.listBreakCases(params, signal);
    }
  );
}

/**
 * Hook to get break case
 *
 * Query key: ["breaks", "Break", breakId]
 */
export function useGetBreakCase(breakId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["breaks", "Break", breakId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return breaksService.getBreakCase(breakId, params, signal);
    },
    {
      enabled: !!breakId
    }
  );
}
