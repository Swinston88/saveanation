import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { expect } from 'meteor/practicalmeteor:chai';
import { be } from 'meteor/practicalmeteor:chai';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import { SavingsAccounts } from './savingsAccounts.js';

if(Meteor.isServer) {
  describe('savingsAccounts', function() {
    describe('methods', function() {
      const userId = Random.id();
      const addSavingsAccount = Meteor.server.method_handlers['savingsAccounts.create'];
      const invocation = { userId };

      beforeEach(function(){
        resetDatabase();
      });

      it('can add a savings account', function(){
        addSavingsAccount.apply(invocation,[2000]);
        expect(SavingsAccounts.find({}).count()).to.equal(1);
      });
    });
  });
}
