/**
 * Supervision Mutation Hooks
 *
 * React Query hooks for mutating supervision data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { supervisionService } from "../supervision.service";
// TODO: Import types
// import type { ... } from "../supervision.api-types";

/**
 * Hook to grant a supervisory subscription
 *
 * Automatically invalidates supervision queries on success.
 */
export function useCreateSupervisorySubscription() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return supervisionService.createSupervisorySubscription(data);
    },
    {
      invalidateQueries: [["supervision", "Subscription"]],
    }
  );
}
