/**
 * Settlements Query Hooks
 *
 * React Query hooks for fetching settlements data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { settlementsService } from "../settlements.service";

/**
 * Hook to list settlement instructions
 *
 * Query key: ["settlements", "Instruction", ]
 */
export function useListSettlementInstructions(params?: Record<string, any>) {
  return useTenantQuery(
    ["settlements", "Instruction", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return settlementsService.listSettlementInstructions(params, signal);
    }
  );
}

/**
 * Hook to get settlement instruction
 *
 * Query key: ["settlements", "Instruction", instructionId]
 */
export function useGetSettlementInstruction(instructionId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["settlements", "Instruction", instructionId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return settlementsService.getSettlementInstruction(instructionId, params, signal);
    },
    {
      enabled: !!instructionId
    }
  );
}
