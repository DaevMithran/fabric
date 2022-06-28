
'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
        this.txIndex = 0
        this.startAt = Date.now()
    }
    
    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
        await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);
    }
    
    async submitTransaction() {
        this.txIndex++;

        const assetID = `${this.workerIndex}_${this.startAt}_${this.txIndex}`;
        let color = 'red';
        let size = '10'
        let owner = 'owner';
        let appraisedValue = '10'

        const request = {
            contractId: 'basic',
            contractFunction: 'CreateAsset',
            invokerIdentity: 'User1',
            contractArguments: [assetID, color, size, owner, appraisedValue],
            readOnly: false
        };

        await this.sutAdapter.sendRequests(request);
    }
    
    async cleanupWorkloadModule() {
        // NOOP
    }
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;