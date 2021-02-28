import RepoCards from './repo-cards.vue'
// Define an object as test repo to be used for testing card
const testRepo = {
  description: 'text',
  created_at: '2021-02-14T14:03:02Z',
  open_issues_count: 5,
  stargazers_count: 20,
  name: 'Gemography',
  owner: {
    login: 'Mohamed Mostafa',
    avatar_url: 'https://avatars.githubusercontent.com/u/1009929?v=4',
  },
}
describe('@components/repo-cards', () => {
  it('renders its description text', () => {
    const { element } = shallowMount(RepoCards, {
      propsData: {
        repo: testRepo,
      },
    })
    expect(element.innerHTML).toContain('text')
  })

  it('renders its name text', () => {
    const { element } = shallowMount(RepoCards, {
      propsData: {
        repo: testRepo,
      },
    })
    expect(element.title).toBe('Gemography')
  })

  it('renders its image', () => {
    const { element } = shallowMount(RepoCards, {
      propsData: {
        repo: testRepo,
      },
    })
    expect(element.getAttribute('img-src')).toBe(testRepo.owner.avatar_url)
  })
})
