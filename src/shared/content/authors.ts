import type { PublicationAuthor } from '../types/publication';

export function formatAuthors(authors: PublicationAuthor[]): string {
  return authors
    .map((author) => (author.isMe ? `**${author.name}**` : author.name))
    .join(', ');
}
