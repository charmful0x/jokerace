import LegacyDeployedRewardsModuleContract from "@contracts/bytecodeAndAbi/modules/RewardsModule.2.1.first.sol/RewardsModule.json";
import NumberedVersioningRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.2.3.numberedVersioning.sol/RewardsModule.json";
import GateSubmissionsOpenRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.2.4.gateSubmissionsOpen.sol/RewardsModule.json";
import BetterRewardsNotesRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.2.5.betterRewardsNotes.sol/RewardsModule.json";
import MerkleVotesRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.1.merkleVotes.sol/RewardsModule.json";
import CantVoteOnDeletedPropsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.10.cantVoteOnDeletedProps.sol/RewardsModule.json";
import AuditMinorFixesRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.11.auditMinorFixes.sol/RewardsModule.json";
import AuditInfoAndOptimizationsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.12.auditInfoAndOptimizations.sol/RewardsModule.json";
import CleanUpContractDocsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.13.cleanUpContractDocs.sol/RewardsModule.json";
import TrackProposalAuthorsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.14.trackProposalAuthors.sol/RewardsModule.json";
import TrackVotersRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.15.trackVoters.sol/RewardsModule.json";
import MakeVarsPublicRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.16.makeVarsPublic.sol/RewardsModule.json";
import LetJkLabsCancelRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.17.letJkLabsCancel.sol/RewardsModule.json";
import AddJokeraceCreatedEventRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.18.addJokeraceCreatedEvent.sol/RewardsModule.json";
import TotalVotesCastRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.2.totalVotesCast.sol/RewardsModule.json";
import SetCompilerRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.3.setCompilerTo8Dot19.sol/RewardsModule.json";
import AddIsDeletedRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.4.addIsDeleted.sol/RewardsModule.json";
import DeletedDontHitLimitRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.5.deletedDontHitLimit.sol/RewardsModule.json";
import BringBackDeletedIdsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.6.bringBackDeletedIds.sol/RewardsModule.json";
import ArrayOfDeletedIdsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.7.makeArrayOfDeletedIds.sol/RewardsModule.json";
import DeletedIdAccessorRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.8.makeDeletedIdAccessor.sol/RewardsModule.json";
import PrivateDeletedIdsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.3.9.privateDeletedIds.sol/RewardsModule.json";
import AddEntryChargeRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.4.1.addEntryCharge.sol/RewardsModule.json";
import UpdateSortingAlgoRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.4.2.updateSortingAlgo.sol/RewardsModule.json";
import NewValueAlreadyInArrayRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.4.3.newValueAlreadyInArray.sol/RewardsModule.json";
import UseCustomErrorsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.4.4.useCustomErrors.sol/RewardsModule.json";
import CleanUpSortingRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.4.5.cleanUpSorting.sol/RewardsModule.json";
import RestructureExtensionsAndUtilsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.4.6.restructureExtensionsAndUtils.sol/RewardsModule.json";
import RmUnnecessaryVirtualsRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.4.7.rmUnnecessaryVirtuals.sol/RewardsModule.json";
import DeleteInMapAfterForLoopRewards from "@contracts/bytecodeAndAbi/modules/RewardsModule.4.8.deleteInMapAfterForLoop.sol/RewardsModule.json";
import DeployedRewardsContract from "@contracts/bytecodeAndAbi/modules/RewardsModule.sol/RewardsModule.json";
import { ethers } from "ethers";
import { getEthersProvider } from "./ethers";
import { executeWithTimeout, MAX_TIME_TO_WAIT_FOR_RPC } from "./timeout";

export async function getRewardsModuleContractVersion(address: string, chainId: number) {
  const provider = getEthersProvider({ chainId });
  const contract = new ethers.Contract(address, NumberedVersioningRewards.abi, provider);

  try {
    const version: string = await executeWithTimeout(MAX_TIME_TO_WAIT_FOR_RPC, contract.version());

    if (version === "4.8") {
      return DeleteInMapAfterForLoopRewards.abi;
    } else if (version === "4.7") {
      return RmUnnecessaryVirtualsRewards.abi;
    } else if (version === "4.6") {
      return RestructureExtensionsAndUtilsRewards.abi;
    } else if (version === "4.5") {
      return CleanUpSortingRewards.abi;
    } else if (version === "4.4") {
      return UseCustomErrorsRewards.abi;
    } else if (version === "4.3") {
      return NewValueAlreadyInArrayRewards.abi;
    } else if (version === "4.2") {
      return UpdateSortingAlgoRewards.abi;
    } else if (version === "4.1") {
      return AddEntryChargeRewards.abi;
    } else if (version === "3.18") {
      return AddJokeraceCreatedEventRewards.abi;
    } else if (version === "3.17") {
      return LetJkLabsCancelRewards.abi;
    } else if (version === "3.16") {
      return MakeVarsPublicRewards.abi;
    } else if (version === "3.15") {
      return TrackVotersRewards.abi;
    } else if (version === "3.14") {
      return TrackProposalAuthorsRewards.abi;
    } else if (version === "3.13") {
      return CleanUpContractDocsRewards.abi;
    } else if (version === "3.12") {
      return AuditInfoAndOptimizationsRewards.abi;
    } else if (version === "3.11") {
      return AuditMinorFixesRewards.abi;
    } else if (version === "3.10") {
      return CantVoteOnDeletedPropsRewards.abi;
    } else if (version === "3.9") {
      return PrivateDeletedIdsRewards.abi;
    } else if (version === "3.8") {
      return DeletedIdAccessorRewards.abi;
    } else if (version === "3.7") {
      return ArrayOfDeletedIdsRewards.abi;
    } else if (version === "3.6") {
      return BringBackDeletedIdsRewards.abi;
    } else if (version === "3.5") {
      return DeletedDontHitLimitRewards.abi;
    } else if (version === "3.4") {
      return AddIsDeletedRewards.abi;
    } else if (version === "3.3") {
      return SetCompilerRewards.abi;
    } else if (version === "3.2") {
      return TotalVotesCastRewards.abi;
    } else if (version === "3.1") {
      return MerkleVotesRewards.abi;
    } else if (version === "2.5") {
      return BetterRewardsNotesRewards.abi;
    } else if (version === "2.4") {
      return GateSubmissionsOpenRewards.abi;
    } else if (version === "2.3") {
      return NumberedVersioningRewards.abi;
    } else if (version === "1") {
      return LegacyDeployedRewardsModuleContract.abi;
    } else {
      return DeployedRewardsContract.abi;
    }
  } catch (error) {
    // If the version method does not exist, use the legacy ABI
    return LegacyDeployedRewardsModuleContract.abi;
  }
}

export default getRewardsModuleContractVersion;
