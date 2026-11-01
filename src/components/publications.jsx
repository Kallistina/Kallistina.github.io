import React from "react";
import Section from "./section";
import { profile, publications } from "../data";

const surname = profile.name.split(" ").pop();

// Bold the author entry that contains my surname.
const Authors = ({ authors }) => (
  <>
    {authors.split(", ").map((author, i, all) => (
      <React.Fragment key={author}>
        {author.includes(surname) ? <strong className="font-semibold text-ink">{author}</strong> : author}
        {i < all.length - 1 && ", "}
      </React.Fragment>
    ))}
  </>
);

const Publications = () => (
  <Section id="publications" title="Publications">
    {publications.length === 0 ? (
      <p className="max-w-2xl text-muted">No publications yet.</p>
    ) : (
      <ol className="space-y-8">
        {publications.map((pub) => (
          <li key={pub.title} className="max-w-3xl">
            <h3 className="font-serif text-lg font-semibold leading-snug text-ink">{pub.title}</h3>
            <p className="mt-1 text-sm text-muted">
              <Authors authors={pub.authors} />
            </p>
            <p className="mt-1 text-sm text-muted">
              <em>{pub.venue}</em>
              {pub.year && `, ${pub.year}`}
              {pub.status && (
                <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium not-italic text-accent">
                  {pub.status}
                </span>
              )}
            </p>
            {pub.links && (
              <div className="mt-2 flex gap-4 text-sm">
                {Object.entries(pub.links)
                  .filter(([, href]) => href)
                  .map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium uppercase tracking-wide text-accent underline-offset-4 hover:underline"
                    >
                      {label}
                    </a>
                  ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    )}
    {profile.links.scholar && (
      <p className="mt-10 text-sm text-muted">
        For a complete and up-to-date list, see my{" "}
        <a href={profile.links.scholar} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
          Google Scholar profile
        </a>
        .
      </p>
    )}
  </Section>
);

export default Publications;
