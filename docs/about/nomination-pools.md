---
id: nomination-pools
title: How to Create Nomination Pools on Avail
sidebar_label: Nomination Pools
description: 'Learn how to create and join nomination pools on the Goldberg testnet.'
keywords:
  - docs
  - avail
  - explorer
  - nomination
  - nominate
  - pools
  - stake
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

## What Are Nomination Pools?

Nomination pools are a critical feature in Avail's consensus system, akin to those in [<ins>Polkadot and Substrate</ins>](https://wiki.polkadot.network/docs/learn-nomination-pools), They allow users to combine their stakes, effectively acting as a single nominator. This approach addresses the limitations of individual small stakes and ensures more efficient participation in the staking process.

<details>
<summary>Pool Mechanics</summary>

### Features

- **Accessibility**: Open to all users, with no minimum stake requirement.
- **Member Capacity**: Each pool can accommodate a large number of members, ensuring wide participation.
- **Reward System**: Rewards are distributed pro-rata but are not guaranteed if the pool's total stake is insufficient.

### Key Considerations

- **Nominating vs. Joining Pools**: Understand the differences between direct staking and pool participation.
- **Restrictions**: Bonded tokens in pools cannot be used for governance activities.
- **Support Channels**: Avail provides dedicated channels for queries and developer support regarding nomination pools.

### Components

- **Bonded Pool**: Manages actively staked funds.
- **Reward Pool**: Tracks earned rewards.
- **Unbonding Sub Pools**: Handles various unbonding phases.
- **Members**: Individuals contributing to the pools.
- **Points System**: A measure of a member's share in the pool.

### Member Lifecycle

1. **Joining**: Members can join a pool by contributing funds.
2. **Claiming Rewards**: Members claim their share of rewards based on their stake in the pool.
3. **Unbonding and Withdrawal**: Members can unbond and withdraw their funds, following a set duration.

### Limitations

- **Voting Restrictions**: Funds in nomination pools cannot be used for voting in governance matters.
- **Pool Switching**: To switch pools, members must unbond all funds, subject to a waiting period.

</details>

<details>
<summary>Pool Administration</summary>

### States of a Pool

- **Open**: The pool is active and open for anyone to join.
- **Blocked**: The pool is currently not accepting new members.
- **Destroying**: The pool is being decommissioned. In this state, no actions can revert the pool back to a previous state, and it is on the path to be fully removed. Members can unbond their stakes without restrictions during this phase.

### Roles within a Pool

- **Depositor**: The creator and initial member of the pool. The depositor has the authority to manage the pool but is also the last to leave, ensuring the pool is properly dismantled.
- **Nominator**: Responsible for selecting validators for the pool to nominate. This role is pivotal in steering the direction and performance of the pool.
- **Bouncer**: Has the power to change the state of the pool, including initiating the transition to a Blocked or Destroying state. They can also remove members from the pool if necessary.
- **Root**: This is the highest administrative level within the pool with the ability to manage all other roles and perform any related administrative actions.

Each role is integral to the efficient operation and governance of the nomination pool. Clear understanding and execution of these roles ensure the pool operates smoothly and aligns with the members' collective objectives.

</details>

## Create a Pool

Nomination pool activites are performed under "Staking".

1. Navigate to 'Network' and select 'Staking' on the navbar.

   > By default, the Staking UI defaults to the Overview page, which shows you the number of validators, nomination pools, and other relevant staking statistics.

      <img src="/img/nomination-pools/1.png" width="200%" height="200%"/>

2. Under 'Staking', select 'Pools'. Here, you will see the [<ins>Staking Pool Dashboard</ins>](https://goldberg.avail.tools/#/staking/pools), which shows a list of active pools, their state, points, claimable rewards, and other details.

    <img src="/img/nomination-pools/2.png" width="200%" height="200%"/>

   :::info Joining a pool

   To join a pool, click the 'Join' button next to the pool you're interested in and follow the prompts.

   :::

3. Under the 'Pools' section, click on '+ Add pool' on the right-hand side to create a new nomination pool.

   <img src="/img/nomination-pools/3.png" width="200%" height="200%"/>

4. Fill in the initial value, description, and pool ID in the provided fields. Select 'Create' once complete.
   <img src="/img/nomination-pools/4.png" width="200%" height="200%"/>

   > The 'pool id' field is a unique identifier for your pool.
   > In the 'description' field, provide a name for your pool. This metadata will serve as the name of your pool and be visible to other users who may wish to join.

5. Verify the transaction details and click on 'Sign and Submit' to proceed with the creation of your nomination pool.

   <img src="/img/nomination-pools/5.png" width="200%" height="200%"/>

You should see your pool in the list of "All pool" and under the "Own pools" tab.

<details>
<summary>Setting Pool Commissions</summary>

As the pool administrator on Avail, you have the capability to establish commission rates that affect the staking rewards distribution. These are the steps and parameters to configure your pool's commissions:

### Commission Rate

- **Function**: Establish the starting or adjusted commission rate.
- **Parameter**: `newCommission`
- **Range**: From 0% to 10%, decided via governance referendum.
- **Usage**: This is the percentage of rewards taken as commission. Specify the recipient account for this commission.

### Max Commission

- **Function**: Set the upper limit for the pool's commission rate.
- **Parameter**: `maxCommission`
- **Note**: Once set, you can only lower this rate, not increase it.

### Change Rate

- **Function**: Determine the maximum increase allowed per commission update.
- **Parameter**: `maxIncrease`
- **Additional Setting**: `minDelay`, the minimum number of blocks after the last commission change before a new update is permitted. Once set, this can only be increased.

### Administrative Transparency

The decision to set Max Commission and Change Rate is at the discretion of the pool admin. These settings are not obligatory but are recommended for clarity and transparency with pool members.

When setting these parameters, balance the need to incentivize pool operation with the rewards expectations of your members. Clear communication regarding commission changes is essential to maintain trust within your pool community.

</details>

<details>
<summary>Exiting a Nomination Pool</summary>

Members of a nomination pool on Avail have the flexibility to leave the pool at any time through a process called unbonding. Here's how it works:

### Unbonding Process

- **Initiation**: A member initiates unbonding by choosing to unbond either a portion or all of their staked funds from the pool.
- **Duration**: Once the unbonding request is made, it enters a cooldown period. The exact duration of this period is specific to Avail and may differ from other platforms.
- **Withdrawal**: Following the end of the unbonding period, the member is eligible to withdraw their funds by executing the `withdrawUnbonded` operation.

### Automatic Rewards Withdrawal

- **Trigger**: Any modification to a member's bonded balance—such as through unbonding—automatically prompts the withdrawal of accumulated rewards.
- **Effect**: The withdrawn rewards are based on the member's stake before the unbonding transaction. This ensures that members receive the rewards they are entitled to up to the point of their unbonding.

### Considerations for Pool Exit

- Exiting the pool ends the member's current staking relationship with that pool.
- Members are free to join another pool after withdrawing their funds, subject to Avail's staking rules and timelines.

### Administrative Notes

- Pool admins should provide members with clear instructions on the unbonding and withdrawal process, including any platform-specific timelines or conditions.
- It is advisable to keep members informed about the status of their unbonding requests and any actions they need to take to complete the withdrawal.

</details>
