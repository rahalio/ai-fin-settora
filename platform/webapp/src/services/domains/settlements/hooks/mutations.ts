/**
 * Settlements Mutation Hooks
 *
 * React Query hooks for mutating settlements data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { settlementsService } from "../settlements.service";
// TODO: Import types
// import type { ... } from "../settlements.api-types";

/**
 * Hook to create instruction from agreed state
 *
 * Automatically invalidates settlements queries on success.
 */
export function useCreateSettlementInstruction() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return settlementsService.createSettlementInstruction(data);
    },
    {
      invalidateQueries: [["settlements", "Instruction"]],
    }
  );
}

/**
 * Hook to send instruction to incumbent rail
 *
 * Automatically invalidates settlements queries on success.
 */
export function useSendSettlementInstruction() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return settlementsService.sendSettlementInstruction(data);
    },
    {
      invalidateQueries: [["settlements", "Send"]],
    }
  );
}

/**
 * Hook to cancel instruction pre-rail
 *
 * Automatically invalidates settlements queries on success.
 */
export function useCancelSettlementInstruction() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return settlementsService.cancelSettlementInstruction(data);
    },
    {
      invalidateQueries: [["settlements", "Cancel"]],
    }
  );
}
