function extensibleObject () {
    const protoObj = {};
    const inst = Object.create(protoObj)

    inst.extend = function (templates) {
        Object.entries(templates).forEach(([key,value]) => {
            if (typeof value === 'function') {
                protoObj[key] = value;
            } else {
                inst[key] = value;
            }
        })
    }

    return inst;
}

