export default (name, plural, Model) => ({
  getList: async (params = {}) => {
    const {
      docs,
      ...pagination
    } = await Model.paginate({
      ...params.filters
    }, params)
    
    return {
      items: docs,
      pagination
    }
  },
  getById: async (id) => {
    return await Model.findById(id)
  },
  getOne: async (query = {}) => {
    return await Model.findOne(query)
  },
  create: async (newEntry) => {
    return await Model.create(newEntry)
  },
  update: async (sourceModel = {}, updateData = {}) => {
    Object.assign(sourceModel, updateData)
    return await sourceModel.save()
  },
  updateById: async (id, updateData = {}) => {
    return await Model.findByIdAndUpdate(id, updateData)
  },
  deleteById: async (id) => {
    return await Model.findByIdAndRemove(id)
  }
})