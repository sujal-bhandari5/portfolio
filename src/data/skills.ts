export type SkillGroup = { title: string; items: { name: string; level: string }[] }

export const skills: SkillGroup[] = [
  { title: 'Programming', items: [{ name: 'C', level: 'Learning' }, { name: 'C++', level: 'Learning' }, { name: 'Python', level: 'Learning' }] },
  { title: 'Web Development', items: [{ name: 'HTML', level: 'Learning' }, { name: 'CSS', level: 'Learning' }, { name: 'JavaScript', level: 'Learning' }, { name: 'React', level: 'Learning' }] },
  { title: 'Tools', items: [{ name: 'Git', level: 'Learning' }, { name: 'GitHub', level: 'Learning' }, { name: 'VS Code', level: 'Familiar' }] },
]
