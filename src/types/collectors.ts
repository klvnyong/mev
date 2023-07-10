import { ItemListedEventPayload, OpenSeaStreamClient } from '@opensea/stream-js'
import { WebSocketProvider } from 'ethers'
import { OpenSeaSDK } from 'opensea-js'
import { Socket } from 'zeromq'

// Parameters of the collectors as objects.
type Event = {
    type: string
}

// Events that could fire from collectors.
export type NewBlock = (params: {
    // TODO: need to update this to be a signed provider
    client: WebSocketProvider
}) => Event & {
    type: 'NewBlock'
    hash: string
    number: number
}

export type OpenseaOrder = (params: {
    openseaClient: OpenSeaSDK
    openseaStreamClient: OpenSeaStreamClient
}) => Event & {
    type: 'OpenseaOrder'
    listing: ItemListedEventPayload
}

// Create a collector that has a generic type of TEvent
// and takes a generic type of TParams.
export type Collector<
    TEvent extends (...args: any[]) => any = () => {},
    TParams = {},
> = (params: Parameters<TEvent>[number] & TParams) => {
    getEventStream: (publisher: Socket) => Promise<void>
}
