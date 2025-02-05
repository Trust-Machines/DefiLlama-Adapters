const { sumTokens } = require('../helper/chain/stacks')

async function tvl() {
    return sumTokens({
        owners: [
            'SP35E2BBMDT2Y1HB0NTK139YBGYV3PAPK3WA8BRNA.state-v1', // STX and SIP10 tokens
        ],
    })
}

module.exports = {
    stacks: {
        tvl,
    },
};