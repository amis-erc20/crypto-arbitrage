/**
 * Created by hesk on 2017/12/13.
 */
const t = require('ccxt');
//const select = require('sql-bricks').select;
let dbprocess = require('pg-bricks').configure(process.env.DATABASE_URL);
dbprocess = dbprocess.native;

module.exports = {
    account_available: async function () {
        /**
         * adding db implementation from using postgre
         * recording every possible high profit trade for paper mock
         * recording every high profit trade for real account - only confirm that account has control of it.
         */
        let users = await db.select().from('fx_bank').where({bank_code: name}).rows();
        
    },
    exchanges: function () {
        return [
            new t.kraken({verbose: false}),
            new t.bittrex({verbose: false}),
            new t.bleutrade({verbose: false}),
            new t.bl3p({verbose: false}),
            new t.allcoin({verbose: false}),
            new t.binance({verbose: false}),
            new t.bit2c({verbose: false}),
            new t.bitbay({verbose: false}),
            new t.bitcoincoid({verbose: false}),
            new t.bitlish({verbose: false}),
            new t.bitmarket({verbose: false}),
            new t.bitso({verbose: false}),
            new t.btcbox({verbose: false}),
            new t.btcchina({verbose: false}),
            new t.btcexchange({verbose: false}),
            new t.btcmarkets({verbose: false}),
            new t.btctradeua({verbose: false}),
            new t.btcturk({verbose: false}),
            new t.btcx({verbose: false}),
            new t.bter({verbose: false}),
            new t.bxinth({verbose: false}),
            new t.ccex({verbose: false}),
            new t.poloniex({verbose: false}),
            new t.cex({verbose: false}),
            new t.gatecoin({verbose: false}),
            new t.chbtc({verbose: false}),
            new t.chilebit({verbose: false}),
            new t.coincheck({verbose: false}),
            new t.coinfloor({verbose: false}),
            new t.foxbit({verbose: false}),
            new t.gdax({verbose: false}),
            new t.gateio({verbose: false}),
            new t.gemini({verbose: false}),
            new t.getbtc({verbose: false}),
            new t.huobipro({verbose: false}),
            new t.itbit({verbose: false}),
            new t.kucoin({verbose: false}),
            new t.kuna({verbose: false}),
            new t.lakebtc({verbose: false}),
            new t.mixcoins({verbose: false}),
            new t.okex({verbose: false}),
            new t.quoine({verbose: false}),
            new t.yunbi({verbose: false}),
            new t.zb({verbose: false}),
            new t.cryptopia({verbose: false}),
            new t.anxpro({verbose: false}),
            new t.bithumb({verbose: false}),
            new t.bitflyer({verbose: false}),
            new t.tidex({verbose: false}),
            new t.bitmex({verbose: false}),
            new t.bitstamp({verbose: false}),
            new t.zaif({verbose: false}),
            new t.vbtc({verbose: false}),
            new t.exmo({verbose: false}),
            new t.southxchange({verbose: false}),
            new t.urdubit({verbose: false}),
            new t.vaultoro({verbose: false}),
            new t.therock({verbose: false}),
            new t.bitfinex2({verbose: false}),
            new t.zb({verbose: false})
        ];

    }
}
;
