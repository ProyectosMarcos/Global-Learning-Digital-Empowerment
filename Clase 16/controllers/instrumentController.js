import { v4 as uuid } from 'uuid'

export const instrumentController = (INSTRUMENTOS) => {

    const getInstruments = ((_request, response) => {
        return response.json(INSTRUMENTOS)
    })

    const createInstrument = ((request, response, next) => {
        const newInstrument = request.body
        const instruments = structuredClone(INSTRUMENTOS)
        try {
            if (!newInstrument.instrumento || !newInstrument.tipo) {
                throw new Error('instrumento and tipo are required')
            }
            instruments.push({
                id: uuid(),
                ...newInstrument
            })
            return response.status(200).json(instruments)
        } catch (error) {
            next(error)
        }

    })

    const getInstrumentbyId = (request, response) => {
        const { id } = request.params;
        const instruments = INSTRUMENTOS.find((instrument) => instrument.id === id)
        if (!instruments) {
            return response.status(404).json({ message: 'Instrument not found' })
        }
        return response.status(200).json(instruments)
    }

    const updateInstrumentbyId = (request, response) => {
        const { id } = request.params
        const instruments = structuredClone(INSTRUMENTOS)
        const instrument = instruments.find((instrument) => instrument.id === id)
        if (!instrument) {
            return response.status(404).json({ message: "Instrument not found" })
        }
        const updatedInstrument = request.body
        const index = instruments.indexOf(instrument)
        instruments.splice(index, 1, { id: instrument.id, ...updatedInstrument })
        return response.status(200).json(instruments)
    }

    const deleteInstrumentbyId = (request, response) => {
        const { id } = request.params
        const instruments = structuredClone(INSTRUMENTOS)
        const instrument = instruments.find((instrument) => instrument.id === id)
        if (!instrument) {
            return response.status(404).json({ message: 'Instrument not found' })
        }
        const index = instruments.indexOf(instrument)
        instruments.splice(index, 1)
        return response.status(200).json(instruments)
    }
    return {
        getInstruments,
        createInstrument,
        getInstrumentbyId,
        updateInstrumentbyId,
        deleteInstrumentbyId
    }
}