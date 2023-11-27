---
id: avail-node-basics
title: Avail Node - Basics
sidebar_label: Basics
description: 'Learn how to run an Avail Node.'
keywords:
  - docs
  - avail
  - node
  - da
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

The goal of this guide is to learn the basics of running Avail Node. No worries, it's not too complicated and it won't take you longer than 5 minutes to get a good grasp on how everything works.

:::note Before you start
All the guides, including this one, assume that you are using a Linux or macOS based system. If you are running Windows and want to follow this guide, make sure
that you install WSL and continue the guide inisde a Ubuntu or Debian instance. To know more about WSL check the following [LINK](https://learn.microsoft.com/en-us/windows/wsl/install)
:::

## Installation & Setup

Our first step is to get the prebuild binary for Avail Node. We offer a wide range of prebuilds but in case you don't see your linux flavour or architecture in here,
head to the custom build section and build your own executable.

Prebuild list:

- Ubuntu: [20.04](#ubuntu-2004) [22.04](#ubuntu-2204) [23.04](#ubuntu-2304) [23.10](#ubuntu-2310)
- Debian: [11](#debian-11) [12](#debian-12)
- Fedora: [38](#fedora-38) [39](#fedora-39)
- Arch: [Latest](#arch)
- Generic Linux: [x86_64](#generic-linux-x86_64) [Arm64](#generic-linux-arm64)

Once you have found your OS (or picked the generic one), execute the given command to get the needed Avail Node binary.

#### Ubuntu 20.04

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-ubuntu-2004-data-avail.tar.gz && tar -xf ./amd64-ubuntu-2004-data-avail.tar.gz

```

#### Ubuntu 22.04

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-ubuntu-2204-data-avail.tar.gz && tar -xf ./amd64-ubuntu-2204-data-avail.tar.gz

```

#### Ubuntu 23.04

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-ubuntu-2304-data-avail.tar.gz && tar -xf ./amd64-ubuntu-2304-data-avail.tar.gz

```

#### Ubuntu 23.10

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-ubuntu-2310-data-avail.tar.gz && tar -xf ./amd64-ubuntu-2310-data-avail.tar.gz

```

#### Debian 11

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-debian-11-data-avail.tar.gz && tar -xf ./amd64-debian-11-data-avail.tar.gz

```

#### Debian 12

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-debian-12-data-avail.tar.gz && tar -xf ./amd64-debian-12-data-avail.tar.gz

```

#### Fedora 38

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-fedora-38-data-avail.tar.gz && tar -xf ./amd64-fedora-38-data-avail.tar.gz

```

#### Fedora 39

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-fedora-39-data-avail.tar.gz && tar -xf ./amd64-fedora-39-data-avail.tar.gz

```

#### Arch

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-arch-data-avail.tar.gz && tar -xf ./amd64-arch-data-avail.tar.gz

```

#### Generic Linux x86_64

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-arch-data-avail.tar.gz && tar -xf ./amd64-arch-data-avail.tar.gz

```

#### Generic Linux Arm64

```bash
wget https://github.com/availproject/avail/releases/download/v1.8.0.2/amd64-arch-data-avail.tar.gz && tar -xf ./amd64-arch-data-avail.tar.gz

```

## Running Our First Network

With the binary ready in our working directory, it's time to run it and see what we get.

```bash
./data-avail
```

Output:

```
Error: Input("Please specify which chain you want to run, e.g. --chain goldberg")
```

Yikes, an error. This is OK, by default our node doesn't know what chain(network) it should connect to so to fix this we will give it one but
not the one recommend, not yet.

Instead we are going to run a development network:

```bash
./data-avail --chain dev
```

Output:

```bash
2023-11-27 16:26:31 Avail Node
2023-11-27 16:26:31 ✌️  version 1.8.3-6d8aff28012
2023-11-27 16:26:31 ❤️  by Anonymous, 2017-2023
2023-11-27 16:26:31 📋 Chain specification: Avail Development Network
2023-11-27 16:26:31 🏷  Node name: cagey-owl-5997
2023-11-27 16:26:31 👤 Role: FULL
2023-11-27 16:26:31 💾 Database: RocksDb at /home/markopetrlic/.local/share/data-avail/chains/avail_development_network/db/full
2023-11-27 16:26:32 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators
2023-11-27 16:26:32 [0] 💸 generated 1 npos targets
2023-11-27 16:26:32 🔨 Initializing Genesis block/state (state: 0x11f1…3471, header-hash: 0xdb94…2e21)
2023-11-27 16:26:32 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2023-11-27 16:26:32 👶 Creating empty BABE epoch changes on what appears to be first startup.
2023-11-27 16:26:32 🏷  Local node identity is: 12D3KooWSKgdEtRrdwWVFPoE3q6z8mzrD5nkQ14Z7ta3D7oTn99V
2023-11-27 16:26:32 Prometheus metrics extended with avail metrics
2023-11-27 16:26:32 💻 Operating system: linux
2023-11-27 16:26:32 💻 CPU architecture: x86_64
2023-11-27 16:26:32 💻 Target environment: gnu
2023-11-27 16:26:32 💻 CPU: 13th Gen Intel(R) Core(TM) i7-13700K
2023-11-27 16:26:32 💻 CPU cores: 16
2023-11-27 16:26:32 💻 Memory: 31863MB
2023-11-27 16:26:32 💻 Kernel: 6.5.12-300.fc39.x86_64
2023-11-27 16:26:32 💻 Linux distribution: Fedora Linux 39 (Workstation Edition)
2023-11-27 16:26:32 💻 Virtual machine: no
2023-11-27 16:26:32 📦 Highest known block at #0
2023-11-27 16:26:32 〽️ Prometheus exporter started at 127.0.0.1:9615
2023-11-27 16:26:32 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]
2023-11-27 16:26:32 🏁 CPU score: 1.65 GiBs
2023-11-27 16:26:32 🏁 Memory score: 22.64 GiBs
2023-11-27 16:26:32 🏁 Disk score (seq. writes): 2.16 GiBs
2023-11-27 16:26:32 🏁 Disk score (rand. writes): 733.69 MiBs
2023-11-27 16:26:37 💤 Idle (0 peers), best: #0 (0xdb94…2e21), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:26:42 💤 Idle (0 peers), best: #0 (0xdb94…2e21), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:26:47 💤 Idle (0 peers), best: #0 (0xdb94…2e21), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:26:52 💤 Idle (0 peers), best: #0 (0xdb94…2e21), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
```

OK, this is better. We are not getting any errors now but it's unclear what's exactly happening so let's go line by line to get some clairy.

### Understanding the logs

```bash
2023-11-27 16:26:31 Avail Node
2023-11-27 16:26:31 ✌️  version 1.8.3-6d8aff28012
2023-11-27 16:26:31 ❤️  by Anonymous, 2017-2023
2023-11-27 16:26:31 📋 Chain specification: Avail Development Network
2023-11-27 16:26:31 🏷  Node name: cagey-owl-5997
2023-11-27 16:26:31 👤 Role: FULL
```

The first two and forth line tells us that we are runing Avail Node v1.8.3 with the Development chain. This is exactly as we wanted, so far so good.

The fifth line, `🏷  Node name: cagey-owl-5997 `, says the name of our node is `cagey-owl-5997` which isn't that bad but not what we wanted. We will change that in a bit.

The last line, `👤 Role: FULL`, says that we are running our node in Full mode. Nodes in Full mode cannot produce blocks so this is something as well that we want change.

### Changing Name

To change our name we can use the `--name` flag. Let's try it out. Before that Make sure that you stopped your node by doing Ctrl-C. After that let's rerun it with a new flag and use a more catchy name:

```bash
./data-avail --chain dev --name KingMagnifico
```

Output:

```bash
2023-11-27 16:39:37 Avail Node
2023-11-27 16:39:37 ✌️  version 1.8.3-6d8aff28012
2023-11-27 16:39:37 ❤️  by Anonymous, 2017-2023
2023-11-27 16:39:37 📋 Chain specification: Avail Development Network
2023-11-27 16:39:37 🏷  Node name: KingMagnifico
2023-11-27 16:39:37 👤 Role: FULL
...
```

### Changing from Full to Validator mode

To run our node in validator mode we just need to pass the `--validator` flag together with the rest of them. Without running it in that mode the node will not produce any new blocks.

Let's stop our node again, Ctrl+C, and add rerun it with the `--validator` flag:

```bash
./data-avail --chain dev --name KingMagnifico --validator
```

Output:

```bash
2023-11-27 16:41:49 Avail Node
2023-11-27 16:41:49 ✌️  version 1.8.3-6d8aff28012
2023-11-27 16:41:49 ❤️  by Anonymous, 2017-2023
2023-11-27 16:41:49 📋 Chain specification: Avail Development Network
2023-11-27 16:41:49 🏷  Node name: KingMagnifico
2023-11-27 16:41:49 👤 Role: AUTHORITY
...
```

This is what we were looking for. Instead of 'FULL' it says 'AUTHORITY' which means that our node is now ready to produce blocks, or to be more precise almost ready.

### Session Keys and Peers

If we let our program running for a minute or two we would see the same message being repeated over and over again:

```bash
...
2023-11-27 16:48:57 💤 Idle (0 peers), best: #0 (0xdb94…2e21), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
```

Our node is working in validator mode but our network that we are running with this node expects validator 'Alice' to be online.
In order for a node to produce blocks, besides using the'--validator' flag, it needs to have session keys that are used to sign different parts of block production.
Without having these keys, it would be impossible for the network to know who produced the block thus we are stuk at block 0.
In the next chapter we will tackle the problen on how to generate your own session keys but for this development network we can pass `--alice` as a flag and it will
automatically inserted Alice's session keys.

Let's stop our node again, Ctrl+C, and add rerun it with the `--alice` flag:

```bash
./data-avail --chain dev --name KingMagnifico --validator --alice
```

Output:

```bash
...
2023-11-27 16:57:10 💤 Idle (0 peers), best: #0 (0xdb94…2e21), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:57:15 💤 Idle (0 peers), best: #0 (0xdb94…2e21), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:57:20 🙌 Starting consensus session on top of parent 0xdb94358c6e772b68a9e23b0ecbea316e4245f4d67b140ae5ffb58709ba222e21
2023-11-27 16:57:20 🎁 Prepared block for proposing at 1 (53 ms) [hash: 0xe7562addc0f4c6a249f23c7696f1a033c8801e33b413440b7d6e45f14da24acf; parent_hash: 0xdb94…2e21; extrinsics (1): [0x5e8b…40ea]
2023-11-27 16:57:20 🔖 Pre-sealed block for proposal at 1. Hash now 0x65ff1a30292f68a8c93e59a96a769975cdeb0d18d13fed5a83f168d579190645, previously 0xe7562addc0f4c6a249f23c7696f1a033c8801e33b413440b7d6e45f14da24acf.
2023-11-27 16:57:20 👶 New epoch 0 launching at block 0x65ff…0645 (block slot 85055032 >= start slot 85055032).
2023-11-27 16:57:20 👶 Next epoch starts at slot 85055752
2023-11-27 16:57:20 ✨ Imported #1 (0x65ff…0645)
2023-11-27 16:57:20 💤 Idle (0 peers), best: #1 (0x65ff…0645), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:57:25 💤 Idle (0 peers), best: #1 (0x65ff…0645), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:57:25 ❌ Error while dialing /dns/telemetry.avail.tools/tcp/8001/x-parity-ws/%2Fsubmit: Custom { kind: Other, error: Timeout }
2023-11-27 16:57:30 💤 Idle (0 peers), best: #1 (0x65ff…0645), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:57:35 💤 Idle (0 peers), best: #1 (0x65ff…0645), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:57:40 🙌 Starting consensus session on top of parent 0x65ff1a30292f68a8c93e59a96a769975cdeb0d18d13fed5a83f168d579190645
2023-11-27 16:57:40 🎁 Prepared block for proposing at 2 (0 ms) [hash: 0xd8b30ca60b080fd49decae48c1ad291a7666f4a3c2287ad5e596565ab1331016; parent_hash: 0x65ff…0645; extrinsics (1): [0x007f…9c1a]
2023-11-27 16:57:40 🔖 Pre-sealed block for proposal at 2. Hash now 0xaa5b610cf99ea519025f4fb803c4e4d874ed8d4eae97045327d44c364bdaec4a, previously 0xd8b30ca60b080fd49decae48c1ad291a7666f4a3c2287ad5e596565ab1331016.
2023-11-27 16:57:40 ✨ Imported #2 (0xaa5b…ec4a)
2023-11-27 16:57:40 💤 Idle (0 peers), best: #2 (0xaa5b…ec4a), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:57:45 💤 Idle (0 peers), best: #2 (0xaa5b…ec4a), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:57:50 💤 Idle (0 peers), best: #2 (0xaa5b…ec4a), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:57:55 💤 Idle (0 peers), best: #2 (0xaa5b…ec4a), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:58:00 🙌 Starting consensus session on top of parent 0xaa5b610cf99ea519025f4fb803c4e4d874ed8d4eae97045327d44c364bdaec4a
2023-11-27 16:58:00 🎁 Prepared block for proposing at 3 (0 ms) [hash: 0xfae370e93725b66c3909186d9e8d37f28e3ca6ab4f42841cc811d113d98a9335; parent_hash: 0xaa5b…ec4a; extrinsics (1): [0x1e14…5a8e]
2023-11-27 16:58:00 🔖 Pre-sealed block for proposal at 3. Hash now 0x78914110e09581baf6d85c791d1bc9f66400bc6fae2db7ee6724706870689083, previously 0xfae370e93725b66c3909186d9e8d37f28e3ca6ab4f42841cc811d113d98a9335.
2023-11-27 16:58:00 ✨ Imported #3 (0x7891…9083)
2023-11-27 16:58:00 💤 Idle (0 peers), best: #3 (0x7891…9083), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 16:58:05 💤 Idle (0 peers), best: #3 (0x7891…9083), finalized #1 (0x65ff…0645), ⬇ 0 ⬆ 0
```

And we are now running our own development network that is producing and finalising blocks. Now, if this doesn't work for you and you are still stuck at block zero you should pass `--force-authoring` together with the rest of flags and this should do the trick.

### There Must Be A Simpler Way

We used quite a lot of flags just to run a development network. Thankfully, there is an eaiser way to do it and that is by passing the `--dev` flag instead.
The `--dev` flag combines the following flags into one: `--chain=dev`, `--force-authoring`, `--alice`, `--tmp`, and `--rpc-cors=all`.
The last two flags are new to us but we will discuss the `--tmp` one in a bit.

Let's stop our node again, Ctrl+C, and add rerun it with the `--dev` flag:

```bash
./data-avail --dev --name KingMagnifico
```

Output:

```bash
...
2023-11-27 17:05:11 👶 Starting BABE Authorship worker
2023-11-27 17:05:16 💤 Idle (0 peers), best: #0 (0xdb94…2e21), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
2023-11-27 17:05:20 🙌 Starting consensus session on top of parent 0xdb94358c6e772b68a9e23b0ecbea316e4245f4d67b140ae5ffb58709ba222e21
2023-11-27 17:05:20 🎁 Prepared block for proposing at 1 (53 ms) [hash: 0x14e7136f060633d6fe4c47e85deb3cc6617dd5b978ee32e504eb5c3f900808bf; parent_hash: 0xdb94…2e21; extrinsics (1): [0xf649…0401]
2023-11-27 17:05:20 🔖 Pre-sealed block for proposal at 1. Hash now 0xfb47a6c99e803ee10678440beeb9f870dfb9b807ef96f5172f1d02bf0c163e3e, previously 0x14e7136f060633d6fe4c47e85deb3cc6617dd5b978ee32e504eb5c3f900808bf.
2023-11-27 17:05:20 👶 New epoch 0 launching at block 0xfb47…3e3e (block slot 85055056 >= start slot 85055056).
2023-11-27 17:05:20 👶 Next epoch starts at slot 85055776
2023-11-27 17:05:20 ✨ Imported #1 (0xfb47…3e3e)
2023-11-27 17:05:21 💤 Idle (0 peers), best: #1 (0xfb47…3e3e), finalized #0 (0xdb94…2e21), ⬇ 0 ⬆ 0
```

And we get the same result.

### Temporary and Persistante Storage

When our node is running a network it needs to store network related data somewhere. By not specifing it it stores the data in a default location which most of the time
is not something that we actually want.

By passing the `--tmp` flag it will use a different location each time we want to run our network. This is implied when using `--dev` and useful when we don't care about our state.
Tomake our storage persistante through our runs, we can use the `-d` flag.

```bash
./data-avail --dev --name KingMagnifico -d ./node-data
```

Output

```bash
2023-11-27 17:13:54 Avail Node
2023-11-27 17:13:54 ✌️  version 1.8.3-6d8aff28012
2023-11-27 17:13:54 ❤️  by Anonymous, 2017-2023
2023-11-27 17:13:54 📋 Chain specification: Avail Development Network
2023-11-27 17:13:54 🏷  Node name: KingMagnifico
2023-11-27 17:13:54 👤 Role: AUTHORITY
2023-11-27 17:13:54 💾 Database: RocksDb at ./node-data/chains/avail_development_network/db/full
```

In the logs(output) you will see that our database is now located at `./node-data/chains/avail_development_network/db/full` instead of somewhere in the `tmp` folder.

Once the node is running a new folder named `node-data` will be created in the working directory. If you take a look at it you will see that it consits of subdirectoires like `chains` and `avail_development_network` and
inside the last directory there should be our network data.

After a minute or two, stop the node by pressing Ctrl+C and rerun it. It should still use the same storage(database) location and continue for the last produced block.

Now stop the node, Ctrl+C, and let's remove our storage `rm ./node-data -r`.

## Conneting Our Node to Goldberg

With all this prelimanry knowledge ready to be used, we can now finally do the last step and connect our node to the Goldberg network.
I will use the same name as before, KingMagnifico, but I suggest you to chose a one that you like.

Before running our node, make sure that our storage folder is removed or empty and that we don't have any previous node already running.
With that said, let's finally do what we were waiting for since the beginning:

```bash
./data-avail --chain goldberg --name KingMagnifico --validator -d ./node-data
```

Output:

```bash
2023-11-27 17:24:41 Avail Node
2023-11-27 17:24:41 ✌️  version 1.8.3-6d8aff28012
2023-11-27 17:24:41 ❤️  by Anonymous, 2017-2023
2023-11-27 17:24:41 📋 Chain specification: Avail Goldberg Testnet
2023-11-27 17:24:41 🏷  Node name: KingMagnifico
2023-11-27 17:24:41 👤 Role: AUTHORITY
2023-11-27 17:24:41 💾 Database: RocksDb at ./node-data/chains/avail_goldberg_testnet/db/full
```

OK, so far so good. Our role is `AUTHORITY` which means that we are running in validator mode. Our name is clearly the correct one, KingMagnifico, and our database location is correct. Let's see the next few log lines

```bash
2023-11-27 17:24:43 🔨 Initializing Genesis block/state (state: 0x6bc7…ec83, header-hash: 0x6f09…a7ae)
2023-11-27 17:24:43 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2023-11-27 17:24:43 👶 Creating empty BABE epoch changes on what appears to be first startup.
2023-11-27 17:24:43 🏷  Local node identity is: 12D3KooWH5bTMnPJXnUqmGcVTX1fmG5ervReMTBFpFZdJNc9WW4u
2023-11-27 17:24:43 Prometheus metrics extended with avail metrics
2023-11-27 17:24:43 💻 Operating system: linux
2023-11-27 17:24:43 💻 CPU architecture: x86_64
2023-11-27 17:24:43 💻 Target environment: gnu
2023-11-27 17:24:43 💻 CPU: 13th Gen Intel(R) Core(TM) i7-13700K
2023-11-27 17:24:43 💻 CPU cores: 16
2023-11-27 17:24:43 💻 Memory: 31863MB
2023-11-27 17:24:43 💻 Kernel: 6.5.12-300.fc39.x86_64
2023-11-27 17:24:43 💻 Linux distribution: Fedora Linux 39 (Workstation Edition)
2023-11-27 17:24:43 💻 Virtual machine: no
2023-11-27 17:24:43 📦 Highest known block at #0
2023-11-27 17:24:43 〽️ Prometheus exporter started at 127.0.0.1:9615
2023-11-27 17:24:43 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]
2023-11-27 17:24:43 🏁 CPU score: 1.61 GiBs
2023-11-27 17:24:43 🏁 Memory score: 22.37 GiBs
2023-11-27 17:24:43 🏁 Disk score (seq. writes): 2.06 GiBs
2023-11-27 17:24:43 🏁 Disk score (rand. writes): 749.80 MiBs
2023-11-27 17:24:43 👶 Starting BABE Authorship worker
2023-11-27 17:24:44 🔍 Discovered new external address for our node: /ip4/176.61.156.176/tcp/30333/p2p/12D3KooWH5bTMnPJXnUqmGcVTX1fmG5ervReMTBFpFZdJNc9WW4u
2023-11-27 17:24:48 ⚙️  Syncing, target=#85251 (8 peers), best: #2685 (0x6fd4…975f), finalized #2560 (0x1282…a791), ⬇ 2.9MiB/s ⬆ 62.5kiB/s
2023-11-27 17:24:53 ⚙️  Syncing 63.0 bps, target=#85251 (8 peers), best: #3000 (0x8189…6cc7), finalized #2560 (0x1282…a791), ⬇ 108.2kiB/s ⬆ 5.5kiB/s
```

Nothing that we haven't seen besides the last two lines. `⚙️  Syncing` means that we are syncing all the blocks that were already built which is exactly what we wanted to see. Let's check the nect few lines

```bash
2023-11-27 17:24:57 [3241] 💸 generated 13 npos targets
2023-11-27 17:24:57 [3241] 💸 generated 22 npos voters, 13 from validators and 9 nominators
2023-11-27 17:24:57 [#3241] 🗳  creating a snapshot with metadata SolutionOrSnapshotSize { voters: 22, targets: 13 }
2023-11-27 17:24:57 [#3241] 🗳  Starting phase Signed, round 1.
2023-11-27 17:24:58 ⚙️  Syncing 61.0 bps, target=#85251 (8 peers), best: #3305 (0xc752…f70e), finalized #3072 (0x1231…8aad), ⬇ 113.8kiB/s ⬆ 0.9kiB/s
2023-11-27 17:25:00 [#3421] 🗳  Starting phase Unsigned((true, 3421)), round 1.
2023-11-27 17:25:00 [#3422] 🗳  queued unsigned solution with score ElectionScore { minimal_stake: 56800545104270, sum_stake: 284279432410424, sum_stake_squared: 16163020265485588884279726278 }
2023-11-27 17:25:02 [#3601] 🗳  Starting phase Off, round 2.
2023-11-27 17:25:02 [3601] 💸 new validator set of size 5 has been processed for era 1
2023-11-27 17:25:03 ⚙️  Syncing 174.0 bps, target=#85252 (8 peers), best: #4175 (0x4e80…5022), finalized #4096 (0xa3c0…c108), ⬇ 218.9kiB/s ⬆ 3.1kiB/s
2023-11-27 17:25:08 ⚙️  Syncing 86.6 bps, target=#85252 (8 peers), best: #4608 (0x1783…e94d), finalized #4321 (0xc708…7dc1), ⬇ 60.8kiB/s ⬆ 0.3kiB/s
2023-11-27 17:25:13 ⚙️  Syncing 194.6 bps, target=#85252 (8 peers), best: #5581 (0x5349…c169), finalized #5120 (0x065c…2a2f), ⬇ 94.7kiB/s ⬆ 0.6kiB/s
2023-11-27 17:25:17 [7561] 💸 generated 35 npos targets
2023-11-27 17:25:17 [7561] 💸 generated 64 npos voters, 35 from validators and 29 nominators
2023-11-27 17:25:17 [#7561] 🗳  creating a snapshot with metadata SolutionOrSnapshotSize { voters: 64, targets: 35 }
2023-11-27 17:25:17 [#7561] 🗳  Starting phase Signed, round 2.
2023-11-27 17:25:18 [#7741] 🗳  Starting phase Unsigned((true, 7741)), round 2.
2023-11-27 17:25:18 [#7742] 🗳  queued unsigned solution with score ElectionScore { minimal_stake: 55937820931230, sum_stake: 581366796392448, sum_stake_squared: 33804612421896598810633033648 }
2023-11-27 17:25:18 [#7921] 🗳  Finalized election round with compute Unsigned.
2023-11-27 17:25:18 [#7921] 🗳  Starting phase Off, round 3.
2023-11-27 17:25:18 [7921] 💸 new validator set of size 10 has been processed for era 2
2023-11-27 17:25:18 ⚙️  Syncing 479.4 bps, target=#85252 (8 peers), best: #7978 (0x01f5…a562), finalized #7680 (0x0ba7…c3f5), ⬇ 302.9kiB/s ⬆ 3.8kiB/s
2023-11-27 17:25:23 ⚙️  Syncing 453.4 bps, target=#85253 (8 peers), best: #10245 (0xad17…4ded), finalized #10240 (0x13da…a4be), ⬇ 591.2kiB/s ⬆ 1.0kiB/s
2023-11-27 17:25:25 [11613] 💸 generated 35 npos targets
2023-11-27 17:25:25 [11613] 💸 generated 74 npos voters, 35 from validators and 39 nominators
```

It's syncing around 450 blocks per second, that's quite fast! If we leave it for 5 or 10 minutes it should be done syncing and this is what we are going to see:

```bash
2023-11-27 17:31:30 [84993] 💸 new validator set of size 185 has been processed for era 21
2023-11-27 17:31:33 ⚙️  Preparing 104.2 bps, target=#85271 (8 peers), best: #85232 (0x234e…a535), finalized #84992 (0x62c0…772a), ⬇ 54.7kiB/s ⬆ 0.9kiB/s
2023-11-27 17:31:38 💤 Idle (8 peers), best: #85271 (0xa69a…7366), finalized #85269 (0xe83c…64ba), ⬇ 46.8kiB/s ⬆ 1.6kiB/s
2023-11-27 17:31:40 ✨ Imported #85272 (0x0410…df45)
2023-11-27 17:31:43 💤 Idle (8 peers), best: #85272 (0x0410…df45), finalized #85270 (0x7604…006b), ⬇ 43.8kiB/s ⬆ 159.2kiB/s
2023-11-27 17:31:48 💤 Idle (8 peers), best: #85272 (0x0410…df45), finalized #85270 (0x7604…006b), ⬇ 87.2kiB/s ⬆ 209.8kiB/s
```

Once we see `💤 Idle` we are done syncing and our node has now fully catched up.

## What's Next

This is where our story ends. We have a working node connect to the Goldberg chain. It doesn't do much right, it certantly doesn't produce any blocks, but this is something that we will fix but before that let's
discuss in the next chapter on how to do a simple but effective deployment.
