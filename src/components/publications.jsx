import React from "react";
import Section from "./section";
import { profile, publications } from "../data";

const surname = profile.name.split(" ").pop();

// Bold the author entry that contains my surname.
const Authors = ({ authors }) => (
  <>
    {authors.split(", ").map((author, i, all) => (
      <React.Fragment key={author}>
        <span className="whitespace-nowrap">
          {author.includes(surname) ? <strong className="font-semibold text-ink">{author}</strong> : author}
        </span>
        {i < all.length - 1 && ", "}
      </React.Fragment>
    ))}
  </>
);

const mainLink = (pub) => Object.values(pub.links || {}).find(Boolean);

// How each key in a publication's `links` is shown on the page.
const linkLabels = { arxiv: "arXiv", pdf: "PDF", doi: "DOI", code: "Code", thesis: "Thesis" };

const Publications = () => (
  <Section id="publications" title="Publications">
    {publications.length === 0 ? (
      <p className="max-w-2xl text-muted">No publications yet.</p>
    ) : (
      <ol className="space-y-8">
        {publications.map((pub, i) => (
          <li key={pub.title} className="group grid grid-cols-[2.25rem_1fr]">
            <span className="pt-0.5 text-sm tabular-nums text-muted transition-colors group-hover:text-accent">[{i + 1}]</span>
            <div>
              <h3 className="font-serif text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                {mainLink(pub) ? (
                  <a href={mainLink(pub)} target="_blank" rel="noreferrer">
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
              {pub.authors && (
                <p className="mt-1 text-sm text-muted">
                  <Authors authors={pub.authors} />
                </p>
              )}
              <p className="mt-1 text-sm text-muted">
                <em>{pub.venue}</em>
                {pub.year && `, ${pub.year}`}
                {Object.entries(pub.links || {})
                  .filter(([, href]) => href)
                  .map(([label, href]) => (
                    <React.Fragment key={label}>
                      {" · "}
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-accent underline-offset-4 hover:underline"
                      >
                        {linkLabels[label] || label}
                      </a>
                    </React.Fragment>
                  ))}
                {pub.status && (
                  <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium not-italic text-accent">
                    {pub.status}
                  </span>
                )}
              </p>
            </div>
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
