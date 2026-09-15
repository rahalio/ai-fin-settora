/**
 * Deals Mutation Hooks
 *
 * React Query hooks for mutating deals data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { dealsService } from "../deals.service";
// TODO: Import types
// import type { ... } from "../deals.api-types";

/**
 * Hook to create a trade deal
 *
 * Automatically invalidates deals queries on success.
 */
export function useCreateTradeDeal() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return dealsService.createTradeDeal(data);
    },
    {
      invalidateQueries: [["deals", "Deal"]],
    }
  );
}

/**
 * Hook to submit a party state assertion
 *
 * Automatically invalidates deals queries on success.
 */
export function useSubmitStateAssertion() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return dealsService.submitStateAssertion(data);
    },
    {
      invalidateQueries: [["deals", "Assertion"]],
    }
  );
}

/**
 * Hook to freeze disputed fields (rest of book continues)
 *
 * Automatically invalidates deals queries on success.
 */
export function useFreezeDealFields() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return dealsService.freezeDealFields(data);
    },
    {
      invalidateQueries: [["deals", "FreezeField"]],
    }
  );
}

/**
 * Hook to attest a documentary milestone
 *
 * Automatically invalidates deals queries on success.
 */
export function useAttestDocumentMilestone() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return dealsService.attestDocumentMilestone(data);
    },
    {
      invalidateQueries: [["deals", "Milestone"]],
    }
  );
}

/**
 * Hook to record a corporate-action event
 *
 * Automatically invalidates deals queries on success.
 */
export function useRecordCorporateActionEvent() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return dealsService.recordCorporateActionEvent(data);
    },
    {
      invalidateQueries: [["deals", "CorporateAction"]],
    }
  );
}
