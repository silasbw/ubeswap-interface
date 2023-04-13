const Order = [
  { name: 'salt', type: 'uint256' },
  { name: 'makerAsset', type: 'address' },
  { name: 'takerAsset', type: 'address' },
  { name: 'maker', type: 'address' },
  { name: 'receiver', type: 'address' },
  { name: 'allowedSender', type: 'address' },
  { name: 'makingAmount', type: 'uint256' },
  { name: 'takingAmount', type: 'uint256' },
  { name: 'makerAssetData', type: 'bytes' },
  { name: 'takerAssetData', type: 'bytes' },
  { name: 'getMakerAmount', type: 'bytes' },
  { name: 'getTakerAmount', type: 'bytes' },
  { name: 'predicate', type: 'bytes' },
  { name: 'permit', type: 'bytes' },
  { name: 'interaction', type: 'bytes' },
]

const EIP712Domain = [
  { name: 'name', type: 'string' },
  { name: 'version', type: 'string' },
  { name: 'chainId', type: 'uint256' },
  { name: 'verifyingContract', type: 'address' },
]

const name = 'Limit Order Protocol'
const version = '2'

export function buildOrderData(chainId: string, verifyingContract: string, order: any) {
  return {
    primaryType: 'Order',
    types: { EIP712Domain, Order },
    domain: { name, version, chainId, verifyingContract },
    message: order,
  }
}
