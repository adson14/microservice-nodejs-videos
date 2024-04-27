import { Category } from "../entities/category.entity"

describe('Category Unit Tests', () => {

  describe('Constructor1', () => {
    test('should create a category with default values', () => {
      var category = new Category({
        name: 'Movie',
        created_at: new Date()
      });
      expect(category.category_id).toBeUndefined()
      expect(category.name).toBe('Movie')
      expect(category.description).toBeNull()
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
    })
  })

  describe('Constructor2', () => {
    test('should create a category with all values', () => {
      const date = new Date()
      const category = new Category({
        name: 'Movie',
        created_at: date,
        description: 'some description',
        is_active: false
      });
      expect(category.category_id).toBeUndefined()
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('some description')
      expect(category.is_active).toBeFalsy()
      expect(category.created_at).toBe(date)
    })
  })

  describe('create method', () => {
    test('should create a category ', () => {
      const date = new Date()
      const category = Category.create({
        name: 'My Movie',
        description: 'some description',
        is_active: true
      });
      expect(category.category_id).toBeUndefined()
      expect(category.name).toBe('My Movie')
      expect(category.description).toBe('some description')
      expect(category.is_active).toBeTruthy()
    })
  })

  test('should change name', () => {
    const category = new Category({
      name: 'Movie',
      created_at: new Date()
    });
    category.changeName('Movie 2')
    expect(category.name).toBe('Movie 2')
  })

  test('change description', () => {
    const category = new Category({
      name: 'Movie',
      created_at: new Date()
    });
    category.changeDescription('some description')
    expect(category.description).toBe('some description')
  })

  test('should activate category', () => {
    const category = new Category({
      name: 'Movie',
      created_at: new Date()
    });
    category.activate()
    expect(category.is_active).toBeTruthy()
  })

  test('should deactivate category', () => {
    const category = new Category({
      name: 'Movie',
      created_at: new Date()
    });
    category.deactivate()
    expect(category.is_active).toBeFalsy()
  })

})